const http = require('http');
const app = require('./app');
const os = require('os');
require('./models');

let ipAddress; // просто хочу, чтобы сервер был виден хотя бы из локальной сети
let port;
if (os.platform() === 'linux') {
  ipAddress = os.networkInterfaces().enp3s0[0].address; // не знаю, как у других, у меня enp3s0
  port = 5000;
} else if (os.platform() === 'win32') {
  // на работе у меня windows)
  ipAddress = os.networkInterfaces().Ethernet[0].address;
  port = 80;
} else {
  ipAddress = '127.0.0.1';
  port = 5000;
}

const server = http.createServer(app);

server.listen(port, ipAddress, () => {
  console.log(`Lucky start at http://${ipAddress}:${port}`);
});
