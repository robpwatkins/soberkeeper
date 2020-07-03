const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Thefatlady3!',
  database: 'testerDB'
});

connection.connect(err => {
  if (err) throw err;
  console.log('You did it!!!');
});

connection.query('SELECT * FROM testPosts', (err, rows) => {
  if (err) throw err;
  console.log('Got your DB data here:');
  console.log(rows);
})

// const user = { ID: 4, username: 'testUser4', post: 'Can you believe it?' };
// con.query('INSERT INTO testPosts SET ?', user, (err, res) => {
//   if (err) throw err;
//   console.log('Last insert ID:', res.insertId);
// })

connection.end(err => {

});

module.exports = connection;