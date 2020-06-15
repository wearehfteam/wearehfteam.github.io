'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM questions'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM account WHERE id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })

    },
    getByDeck: (req, res) => {
        let sql = 'SELECT * FROM account WHERE deck = ?'
        db.query(sql, [req.params.deck], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })

    }
}
