const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type', })
    console.log(req);
}).listen(8080, (err)=>{
    console.log("Server listening on port 8080");
})