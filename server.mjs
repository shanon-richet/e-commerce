import express from "express"
import cors from 'cors'
import path from 'path'
import bodyParser from "body-parser"
import session from 'express-session'
import pool from './config.mjs'
import { fileURLToPath } from "url"
import { dirname } from "path"
import router from "./routes/products.mjs"

const port = process.env.port || 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(router)

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: true,
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

//login
app.post('/users', async (req, res) => {
    req.session.save(function (err) {
        console.log(req.session)
    })
    pool.connect(async function () {
        var data = req.body
        console.log(req.body)
        let email = await pool.query(`SELECT email FROM users WHERE email= ('${data.email}');`)
        let password = await pool.query(`SELECT pass FROM users WHERE pass= ('${data.password}');`)
        if ((email.rows.length > 0) && (password.rows.length > 0)) {
            res.sendFile(path.join(__dirname, '/public/users.html'))
            app.set('email', `${req.body.email}`)
        } else {
            res.send('There was an error')
        }
    })
})

app.get('/users/card', async (req, res) => {
    /*res.send(app.get('email'))*/
    pool.connect(async function () {
        let title = await pool.query(`SELECT card.email_user, products.title, products.price FROM card INNER JOIN products ON card.title=products.title WHERE email_user= ${app.get('email')};`)
        res.send(title.rows)
    })
})

//logout
app.post('/', (req, res) => {
    req.session.destroy()
    res.redirect('/')
})

app.listen(port)
console.log('Server started at http://localhost:' + port)