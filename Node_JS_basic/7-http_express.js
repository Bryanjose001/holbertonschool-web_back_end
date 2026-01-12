const express = require('express');

const hostname = '127.0.0.1';
const port = 1245;

const app = express();

app.get('/', (request, response) => {
  response.status(200).send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  response.write('This is the list of our students\n');

  try {
    await countStudents(DATABASE);
    response.end();
  } catch (error) {
    response.end(error.message);
  }
});

app.listen(port, hostname, () => {
  console.log(`http://localhost://${port}:${hostname}`);
});

module.exports = app;
