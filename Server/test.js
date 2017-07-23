let http  = require('http')
let fs = require('fs')
let events = require('events')

//  let read = fs.createReadStream(__dirname + '/input.txt','utf8')
//  let write = fs.createWriteStream(__dirname + '/output.txt')
let server = http.createServer(function (req,res){
    console.log('request made:' + req.url)

    // Doc text tu file input tai len trinh duyet text/plain
    res.writeHead(200, {'Content-type': 'text/plain'})
    let read = fs.createReadStream(__dirname + '/input.txt','utf8')
    
    // doc file html 
    res.writeHead(200, {'Content-type': 'text/html'})
    let read1 = fs.createReadStream(__dirname + '/index.html','utf8')


    // doc du lieu chuyen sang JSON
    res.writeHead(200, {'Content-type': 'application/json'})
    let student ={
        name: 'thanh',
        id: '1240',
        phone: '0988260505'
    }
    res.end(JSON.stringify(student))
    


    // read.pipe(res)
    // read1.pipe(res)
    // res.end('222222')
})

server.listen(3000)
console.log('listening 3000');
