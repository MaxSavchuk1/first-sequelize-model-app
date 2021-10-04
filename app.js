const express = require('express');
const router = require('./router');

const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/public')); // я уже и такое могу)
app.use('/api', router);

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = app;
