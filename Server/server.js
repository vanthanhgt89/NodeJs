let fs = require('fs')
let url = require('url')
function renderHTML(path, res) {
    fs.readFile(__dirname + path, null, function (err, data) {
        if (err) {
            res.writeHead(404, { 'content-type': 'text/html' })
            res.write(__dirname + '/404.html')
        } else {
            res.write(data)
        }
        res.end()
    })
}
module.exports = {
    handlerRequest: function (req, res) {
        res.writeHead(200, { 'content-type': 'text/html' })
        let path = url.parse(req.url).pathname
        console.log(path);
        switch(path){
            case '/': 
                renderHTML('/index.html', res)
                break;
            case '/contact':
                renderHTML('/contact.html',res)
            default:
                renderHTML('/404.html',res)         
        }

    }
}