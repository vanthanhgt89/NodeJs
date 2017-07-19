let fs = require('fs')
let path = require('path')
let myFile = '/c/Users/Admin/Desktop/NodeJs'

let file = path.basename(myFile)// tra ve ten file
let dirName = path.dirname(myFile)// tra ve duong dan den file
let name = path.join(path.dirname(fs.realpathSync(__filename)),'./lib')
console.log(file);
console.log(dirName);
console.log(name);
//fs.existsSync: kiem tra file co ton tai hay khong tra ve true/false
if(fs.existsSync(myFile)){
    let content = fs.readFileSync(myFile,'utf-8')
    fs.writeFileSync(myFile, content.toUpperCase())
    console.log('done')
}else{
    console.log('File khong tai ' + myFile);
}