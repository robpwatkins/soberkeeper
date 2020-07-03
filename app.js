const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Thefatlady3!',
  database: 'testerDB'
});

connection.connect(err => {
  if (err) throw err;
  console.log('You did it!');
})