let fs = require('fs')
// Xoa file
// fs.unlink('./File/output.txt', err => {
//     if (err) throw new Error(err)
//     console.log('Xoa file thanh cong');
// })

// Them thu muc
fs.mkdir('./File/output', (err) => {
    if (err) throw new Error(err)
    console.log('Tao file thanh cong');
    fs.readFile('./File/input.txt', (err, data) => {
        if (err) throw new Error(err)
        fs.writeFile('./output/output.txt', data, err => {
            if (err) throw new Error(err)
            console.log('Ghi file thanh cong');
        })
    })
})

// Xoa thu muc
// fs.rmdir('./File/output.txt', err => {
//      if(err) throw new Error (err)
//     console.log('Xoa file thanh cong');   
// })

