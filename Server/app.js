let http = require('http')
let server = require('./server')

http.createServer(server.handlerRequest).listen(3006)
console.log('listen 3006');