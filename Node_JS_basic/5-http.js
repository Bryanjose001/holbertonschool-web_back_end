const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;
const countStudents = require('./3-read_file_async');

const DATABASE = process.argv[2];

const app = http.createServer(async (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  const { url } = request;
  if (url === '/') {
    response.end('Hello Holberton School!');
  } else if (url === '/students') {
    response.write('This is the list of our students\n');

    try {
      const students = await countStudents(DATABASE);
      response.end(students);
    } catch (error) {
      response.end(error.message);
    }
  }
});

app.listen(port, hostname, () => {
  console.log(`http://localhost://${port}:${hostname}`);
});

module.exports = app;
