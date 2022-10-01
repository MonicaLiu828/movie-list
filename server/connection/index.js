var mysql = require('mysql2');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'movielist'
});

db.connect();

db.query('SELECT * FROM movies LIMIT 1', (err, rows, fields) => {
  if (err) { throw err; }

  console.log('MySQL Database connection succeed!');
});

module.exports = db;