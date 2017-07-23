let express = require('express')

let app = express()

app.get('/', (req, res) => {
    // res.sendfile(__dirname + '/index.html')
    res.render('index')
})
app.get('/contact', (req, res) => {
    res.sendfile(__dirname + '/contact.html')
})

app.get('/contact/:id', (req, res) => {
    res.send(' You request to see contact with id of ' + req.params.id)
})
app.listen(8000)

console.log('Listen 8000');