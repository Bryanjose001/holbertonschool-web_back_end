const express = require('express');

const hostname = '127.0.0.1';
const port = 1245;

const app = express();

app.get('/', (request, response) => {
  response.status(200).send('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log(`http://localhost://${port}:${hostname}`);
});

module.exports = app;
