const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'testUser',
  password: 'Password123$',
  database: 'testerDB'
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

connection.connect(err => {
  if (err) throw err;
  console.log('Connected!');
});

app.use(express.json());

app.get('/testPosts', (req, res) => {
  connection.query('SELECT * FROM testPosts', (err, rows) => {
    if (err) throw err;
    res.send(rows);
  })
});

app.post('/testPosts', (req, res) => {
  const newPoster = { 
    ID: req.body.ID, 
    username: req.body.username,
    post: req.body.post
   }
  connection.query('INSERT INTO testPosts SET ?', newPoster, (err, res) => {
    if (err) throw err;
    console.log('Last insert ID:', res.insertID);
  })
})