const fs = require('fs')

const promise = require('bluebird')
// let sourcePath = '/Users/vanthanh/Desktop/Js-example/Node js'
// // fs.readdir(sourcePath, (err, files) =>{
// //   console.log(files);
// // })
// let readdirAsync = promise.promisify(fs.readdir)
// let statAsync = promise.promisify(fs.stat)

const log = (x, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      // console.log(`log ${x} after ${timeout}ms`);
      resolve(`log ${x} after ${timeout}ms`)
    }, timeout);
  });
}

let iterator = [log(7, 700), log(1, 100), log(5, 500), log(2, 200)]

promise.map(iterator, (each => {
  console.log(each);
  return each
})).then(res => console.log(res))

// promise.mapSeries, promise.each chay tuan tu
// promise.map, promise.all chay khong tuan tu

