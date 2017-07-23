let fs = require('fs')
// khi chua set ecoding -> read duoi  dang buffer
let read = fs.createReadStream('./Stream/input.txt')

// set ecoding
let read1 = fs.createReadStream('./Stream/input.txt', 'utf8')

let write = fs.createWriteStream('./Stream/output1.txt')

read.on('data', function (chunk){
    console.log('new chunk received')
    console.log(chunk);
})
read1.on('data', function (chunk){
    console.log('new chunk received')
    console.log(chunk);
    write.write(chunk, err => {
        if(err) throw new Error(err)
        console.log('Ghi thanh cong');    
    })
})

// read.pipe(write)