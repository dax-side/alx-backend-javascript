const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  if (typeof(req.params.id) == 'number') {
  res.status(200).send(`Payment methods for cart ${req.params.id}`);
  }
  res.status(404);
})

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;
