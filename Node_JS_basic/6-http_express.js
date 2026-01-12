const http = require('http');
const express = require('express');

const hostname = '127.0.0.1';
const port = 1245;
const app = express();

app.get((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log(`http://localhost://${port}:${hostname}`);
});

module.exports = app;
