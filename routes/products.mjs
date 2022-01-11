import express from "express";
import pool from "../config.mjs";

const router = express.Router()
router.route('/api')
    .get(function (req, res) {
        pool.query('SELECT * FROM products ORDER BY id ASC;', (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
        })
    })
    .put(function (req, res) {
        res.send('Update the book');
    })

export default router;