
// Hello World in NodeJs
// new js file as test.js
var http = require('http');
var currentDate = require('./app-module/date-api')
const { default: test } = require('node:test');
 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end("Today's date is " + currentDate.currentDateTime());
 }).listen(8080);
console.log('hi');