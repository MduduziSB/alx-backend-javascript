const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

// Attach a listener for the 'request' event
app.on('request', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {
  //console.log(`Server is running at http://${HOST}:${PORT}/`);
});

module.exports = app;

