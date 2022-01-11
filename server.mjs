import express from "express"
import cors from 'cors'
import path from 'path'
import bodyParser from "body-parser"
import pool from './config.mjs'
import { fileURLToPath } from "url"
import { dirname } from "path"

const port = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/api', (req, res) => {
    pool.query('SELECT * FROM products ORDER BY id ASC;', (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows)
    })
})


app.listen(port)
console.log('Server started at http://localhost:' + port);