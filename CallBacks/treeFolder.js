let fs = require('fs')
let path = require('path')
let sourcePath = '/Users/vanthanh/Desktop/Js-example/Node js'

function read(sourcePath) {
  let info = {
    name: path.basename(sourcePath),
    type: ''
  }
  if(fs.stat(sourcePath, (err, stat) =>{
    if(err) throw new Error ('file not exist')
    if(stat.isDirectory()){
      info.type = 'folder'
      fs.readdir(sourcePath, (err, files) => {
        info.children = files.forEach(file => {
          console.log(file);
        })
        // console.log(info);
      })
    }else{
      info.type = 'file'
    }
        // console.log('nam',info);
    
  }))
  // info.type = 'folder'
  // fs.readdir(sourcePath, (err, files) => {
  //   if (err) throw new Error('cant find folder')
  //   info.childern = files.map(file => {
  //     fs.stat((sourcePath + '/' + file), (err, stat) => {
  //       if (err) throw new Error('abc')
  //       if (stat.isDirectory()) {
  //         info.type = 'folder'
  //         // console.log(file + 'folder');
  //          return read(sourcePath + '/' + file)
  //       } else {
  //         info.type = 'file'
  //         // console.log(file + 'file');
  //       }
  //     })
  //   })
  // })
  return info
}
console.log(read(sourcePath));
