'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM account'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM account WHERE username = ?'
        db.query(sql, [req.params.username], (err, response) => {
            if (err) throw err
            res.json(response)
        })

    },
    update: (req, res) => {
        let data = req.body;
        let productusername = req.params.productusername;
        let sql = 'UPDATE account SET ? WHERE username = ?'
        db.query(sql, [data, username], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO account SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM account WHERE username = ?'
        db.query(sql, [req.params.productusername], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}
