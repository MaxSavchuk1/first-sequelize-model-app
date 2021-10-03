const express = require('express');
const router = require('./router');

const app = express();

app.use('/api', router);

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = app;
