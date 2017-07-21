
//Piping Stream 
let fs = require('fs')

let read = fs.createReadStream(__dirname + '/input.txt')
let write = fs.createWriteStream(__dirname + '/output.txt')

read.pipe(write) // pipe() doc du lieu tu 1 file va ghi du lieu den file can ghi
console.log("end");

// Chaining stream

let zlib = require('zlib');

// Giai nen input.txt.gz thanh input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));
  
console.log("Giai nen File thanh cong.");


