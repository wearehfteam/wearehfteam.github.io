'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: '172.19.0.2',
  port: 3306,
  user: 'flashcard',
  password: '123456',
  database: 'flash_card'
});

module.exports = db;
