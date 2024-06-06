const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());

app.get('/', (_req, rs) => {
  rs.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (rq, rs) => {
  const id = rq.params.id;

  rs.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_req, rs) => {
  rs.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.post('/login', (rq, rs) => {
  let username = '';

  if (rq.body) {
    username = rq.body.userName;
  }

  rs.send(`Welcome ${username}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
