let http = require('http')
let fs = require('fs')
let url = require('url')

let server = http.createServer(function (req, res){
    console.log(req.url)
     let path = url.parse(req.url).pathname
     console.log(path);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    }else if(req.url === '/contact'){
        res.writeHead(200, {'content-type': 'text/html'})
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    }else{
        res.writeHead(404, {'content-type': 'text/html'})
        fs.createReadStream(__dirname + '/404.html').pipe(res)
    }
})

server.listen(3005)
console.log('listen 3005');
