const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
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

app.use(express.json());

app.listen(port, () => console.log(`I'm herrrrre on port ${port}`));

app.get('/express_backend', (req, res) => {
  connection.query('SELECT * FROM testPosts', (err, rows) => {
    if (err) throw err;
    res.send(rows);
  })
});

app.post('/express_backend', (req, res) => {
  console.log(req.body);
  res.send({ testRes: req.body });
})