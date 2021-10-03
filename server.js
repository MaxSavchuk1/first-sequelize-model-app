const http = require('http');
const app = require('./app');
require('./models');
const PORT = 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Lucky start at localhost:${PORT}`);
});
