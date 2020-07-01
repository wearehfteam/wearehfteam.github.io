"use strict";
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  port: 3306,
  user: "sql12351810",
  password: "hFzLGGXLDd",
  database: "sql12351810",
});

module.exports = db;
