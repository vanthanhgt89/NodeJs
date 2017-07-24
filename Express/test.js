const express = require('express')
const path = require('path')



const app = express()

// ------ Body parse ----
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

app.get('/', (req, res) => {
    res.sendfile(__dirname + '/index.html')
    // res.render('index')
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.sendfile(__dirname + '/index.html')
    // res.render('index')
})
app.get('/contact', (req, res) => {
    res.sendfile(__dirname + '/contact.html')
})

app.get('/contact/:id', (req, res) => {
    res.send(' You request to see contact with id of ' + req.params.id)
})
app.listen(3000, err =>{
    console.log('listen 3000');
})

//req.query.name --> dung cho get: ? & ex: ?name
//req.body.name ---> dung cho post

//req.params.id ---> dung cho get dang : ex :id