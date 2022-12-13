



// Hello World in NodeJs
// new js file as test.js
var http = require('http');
const { default: test } = require('node:test');
 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('My NodeJs Application is running on my local server');
 }).listen(8080);
