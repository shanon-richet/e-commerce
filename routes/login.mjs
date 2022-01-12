import express from "express";
import pool from "../config.mjs";

const routerLogin = express.Router()
routerLogin.route('/users')
    .post(async function (req, res) {
        pool.connect(async (error, release) => {
            let email = await pool.query(`SELECT email FROM users WHERE email= ('${req.body.email}')`)
            let passwrd = await pool.query(`SELECT passwrd FROM users WHERE passwrd= ('${req.body.passwrd}')`)
            if ((email.rows.length > 0) && (passwrd.rows.length > 0)) {
                res.sendFile(path.join(__dirname, '/public/users.html'))
            } else {
                res.send('There was an error')
            }
        })
    })

export default router;