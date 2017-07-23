let fs = require('fs')


fs.openSync(__dirname + '/input.txt', 'r+')

fs.open('./File/input.txt', 'r+', (err, fd) => {
    if(err) throw new Error (err)
    console.log('File dc mo thanh cong');    
})