let fs = require('fs')
let path = require('path')
let sourcePath = '/Users/vanthanh/Desktop/Js-example/Node js/'
let resolve = path.resolve(sourcePath) // Tra ve duong dan tuyet doi cua thu muc
// console.log(resolve);

function readFolder(sourcePath, doneRead) {
  let info = []

  fs.readdir(sourcePath, (err, listItem) => {
    if (err) throw new Error('Kiem tra duong dan folder')
    if (!listItem.length) {
      info.push({
        name: path.basename(sourcePath),
        type: 'folder'
      })
      return doneRead(null, info)
    } else {
      info.childern = listItem.map(item => {
        // console.log(item);
        fs.stat(sourcePath + '/' + item, (err, stat) => {
          if (err) throw new Error('err')
          if (stat.isDirectory()) {
            // console.log(item + '-->folder');
            readFolder(sourcePath + '/' + item, (err, result) => {
              info.push({
                name: item,
                type: 'folder',
                childern: result
              })
              if(!result.length){
                return doneRead(null, info)
              }
            })
          } else {
            // console.log(item + '-->file');
            info.push({
              name: path.basename(sourcePath),
              type: 'file'
            })
            if(!item.length){
              return done(null, info)
            }
          }
        })
      })
    }

  })
}

readFolder(sourcePath, (err, res) => {
  if (err) throw new Error('Error')
  console.log(res);
})


// function read(sourcePath) {
//   let info = {
//     name: path.basename(sourcePath),
//     type: ''
//   }
//   if(fs.stat(sourcePath, (err, stat) =>{
//     if(err) throw new Error ('file not exist')
//     if(stat.isDirectory()){
//       info.type = 'folder'
//       fs.readdir(sourcePath, (err, files) => {
//         info.children = files.forEach(file => {
//           console.log(file);
//         })
//         // console.log(info);
//       })
//     }else{
//       info.type = 'file'
//     }
//         // console.log('nam',info);

//   }))
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
//   return info
// }
// console.log(read(sourcePath));
