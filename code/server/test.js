var db = require('./api/db');

let sql = 'SELECT * FROM questions';
db.query(sql, (err, response) => {
  if (err) throw err;
  console.log(response);
});
