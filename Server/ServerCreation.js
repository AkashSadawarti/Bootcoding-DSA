let http = require('http')
http.createServer((req,res)=>{
    res.write("Welcome to Localhost 1980's")
    res.end()
}).listen(1980)