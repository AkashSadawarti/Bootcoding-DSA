//require() is used for using http module in app
//CreateServer Name of method
//res = response towrite message and end it
//Web server to listen on port 1980(port num could be anything)


let http = require('http')
http.createServer((req,res)=>{
    res.write("Welcome to Localhost 1980's")
    res.end()
}).listen(1980)