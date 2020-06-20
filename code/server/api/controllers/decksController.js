'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM decks'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM decks WHERE id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response)
        })

    }
}
