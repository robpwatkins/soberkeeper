const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`I'm herrrrre on port ${port}`));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'Yo its your backend!' });
});

app.post('/express_backend', (req, res) => {
  // res.send({ express: 'Posting like a boss' })
})