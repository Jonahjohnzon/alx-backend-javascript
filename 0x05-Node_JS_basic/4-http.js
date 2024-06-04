const http = require('http');

const hostnam = '127.0.0.1';
const pot = 1245;

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});

app.listen(pot, hostnam, () => {
});

module.exports = app;
