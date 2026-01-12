const express = require('express');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = express();
const DATABASE = process.argv[2];

app.get('/', (request, response) => {
  response.status(200).send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  try {
    const dataResult = await countStudents(DATABASE);
    response.status(200).send('This is the list of our students\n' + dataResult,);
  } catch (error) {
    response.status(200).send('This is the list of our students\n' + error.message,);
  }
});

app.listen(port, hostname, () => {
  console.log(`http://localhost://${port}:${hostname}`);
});

module.exports = app;
