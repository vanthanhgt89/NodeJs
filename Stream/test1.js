let fs = require('fs')
let path = require('path')
function readStreamDemo(){
let data = ''
// doc du lieu
// let myfile = path.resolve('./input.txt')
let readStream = fs.createReadStream(__dirname + '/input.txt')

// thiet lap encoding
readStream.setEncoding('UTF8')

// xu ly cac su kien lien quan den data -> end va error

readStream.on('data', function (chunk){
  data += chunk
})


readStream.on('end', () => console.log(data))
readStream.on('error', err => console.log(err.stack))

console.log('ket thuc');
}



// Ghi du lieu

function writeStreamDemo(){
  let data = 'ghi du lieu vao dich den'
  // tao mot writestream
  let writeStream = fs.createWriteStream(__dirname + '/output.txt')
  //Ghi du lieu stream theo ma hoa utf8
  writeStream.write(data,'UTF8')

  // Danh dau diem cuoi cua file
  writeStream.end()

  // xu ly cac su kien lien quan den ghi file Stream -> fishish, error

  writeStream.on('fishish', () => {
    console.log('Ket thuc hoat dong ghi');
  })

  writeStream.on('error', err => console.log(err.stak))
}

writeStreamDemo()
