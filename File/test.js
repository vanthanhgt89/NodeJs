let fs = require('fs')
let data = 'doc ghi file'

// read sync
// let read = fs.readFileSync('./File/input.txt', 'utf8')
console.log(__dirname);
console.log(__filename);
// fs.writeFileSync('./File/output.txt',read)

// aync
fs.readFile('./File/input.txt', 'utf8', (err, data) => {
    if (err) throw new Error(err)
    fs.writeFile('./File/output.txt', data, err => {
        if (err) throw new Error(err)
        console.log('file dc ghi thanh cong');
    })
})

