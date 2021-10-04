const express = require('express');
const router = require('./router');

const app = express();
app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
  res
    .status(200)
    .send("<h1 style='width: 100%; text-align: center;'>Hello</h1>");
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = app;
