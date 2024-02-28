const http = require('http');

const PORT = 1245;
const HOST = '127.0.0.1';
const app = http.createServer();

app.on((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {});

module.exports = app;
