function writeDemo() {
  let buf = new Buffer(256)
  let buf1 = new Buffer([10, 20, 30, 40])
  let buf2 = new Buffer("Hoc Nodejs tai VietJack", "utf-8")
  // Ghi du lieu vao buffer
  let length = buf.write('Tim hieu ve buffer?')
  console.log('Tong so byte da ghi: ' + length);

  let writeBuf1 = buf.write('Tim hieu ve buffer?', 10, 5)
  console.log(writeBuf1);
}

function readDemo() {
  let buffer = new Buffer(26)
  for (let i = 0; i < 26; i++) {
    buffer[i] = i + 97
  }
  console.log(buffer.toString('ascii')); // kq: abcdefghijklmnopqrstuvwxyz
  console.log(buffer.toString('utf-8',0,5))// kq: abcde
}
// readDemo()

 function bufToJson(){
   let buf = new Buffer('node js buffer')
   let json = buf.toJSON(buf)
   console.log(json);
   //{ type: 'Buffer',
  // data: [ 110, 111, 100, 101, 32, 106, 115, 32, 98, 117, 102, 102, 101, 114 ] }
 }

 bufToJson()

 function concatBuf(){
   let buf1 = new Buffer('Hoc node js ')
   let buf2 = new Buffer('tai techmaster')
   let buf3 = Buffer.concat([buf1,buf2])

   console.log('Độ dài buf ghép nối: ' + buf3.toString());
 }

 concatBuf()

 function compareBuf(){
   let buf1 = new Buffer('node')
   let buf2 = new Buffer('techmaster')
   let result = buf1.compare(buf2)
   if(result > 0){
     console.log(buf1 + ' đứng trước ' + buf2);
   }else if(result === 0){
     console.log(buf1 + ' cùng thứ tự với ' + buf2);
   }else{
     console.log(buf1 + ' đứng sau ' + buf2);
   }

   let buf3 = new Buffer(5)
   buf3.copy(buf2)
   console.log('buf3 :' + buf3);
   console.log('buf3 :' + buf3.toString());


   let buf4 = new Buffer('hoc lap trinh')
   let buf5 = buf4.slice(0,7)
   console.log(buf5.toString()) //hoc lap
   
 }

 compareBuf() //node đứng sau techmaster