const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('Welcome World!');
    }
    if(req.url==='/about'){
        res.end('Abou Page')
    }
    res.end(`<h1>Sorry <h1>`)

})
console.log(server)

server.listen(5000);