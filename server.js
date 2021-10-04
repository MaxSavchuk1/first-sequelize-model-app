const http = require('http');
const app = require('./app');
const os = require('os');
require('./models');

const {
  Ethernet: [{ address }],
} = os.networkInterfaces(); // узнать свой IP

const PORT = 80;
const server = http.createServer(app);

server.listen(PORT, address, () => {
  console.log(`Lucky start at http://${address}:${PORT}`);
});
