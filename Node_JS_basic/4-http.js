const http = require('node:http')

const port = 1245

const server = http.createServer((res)=>{
  res.writeHead(200, { 'Content-Type': 'text/plain'});

  res.end('Hello Holberton School!')
})

server.listen(port, 'localhost', () => {
  console.log(`http://localhost:${port}`)
});