"use strict";
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "db4free.net",
  port: 3306,
  user: "hfteam",
  password: "hellohfteam",
  database: "flash_card",
});

module.exports = db;
