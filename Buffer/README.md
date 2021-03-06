# Buffer là gì?
* Javascript mã hoá UNICODE một các tiện lợi nhưng không thực sự tốt với dữ liệu nhị phân
* Khi làm việc với các luồng TCP hoặc file hệ thống cần xử lý liệu dữ liệu bát phân
* Buffer là một biến golal nên không phải require chỉ cần tạo đối tương từ buffer và sử dụng
```js
  //Khai báo 1 đối tượng từ buffer
  let buf = new Buffer(n) 
  /** 
    VD: n = 10 chỉ số byte mà buf có thể ghi nếu vượt quá nó chỉ số lượng bằng số lượng khai báo
        n = [10,20,30,40] 
        n = ('Kiểu string khai báo tuỳ ý', 'utf-8')
        utf- 8 là các khai báo mặc định có thể dùng thêm ascii, base64.
  */
  // Các ghi một một buffer
  let writeBuff = buf.write(string [, offset] [, length] [, encoding])
  /** 
    string: chuỗi string bất kỳ được ghi
    offset: chỉ mục để buffer bắt đầu ghi tại đó, mặc định là 0
    length: số lượng byte được ghi. mặc định length
    encoding: mã hoá sử dụng. Mặc định là utf-8
  */
``` 
### Xét ví dụ sau:
```js
  let buf = new Buffer(256)
  let writeBuf = buf.write('Tim hieu ve buffer?')
  console.log('Tổng số byte được ghi: ' + writeBuf) // KQ: Tong so byte da ghi: 19
  let writeBuf1 = buf.write('Tim hieu ve buffer?', 10 , 5)
  console.log('Tổng số byte được ghi: ' + writeBuf) // KQ: Tong so byte da ghi: 5
  
```

### Đọc dữ liệu từ buffer
> buf.toString([encoding] [,start] [, ends])

```js
function readDemo() {
  let buffer = new Buffer(26)
  for (let i = 0; i < 26; i++) {
    buffer[i] = i + 97
  }
  console.log(buffer.toString('ascii')); // kq: abcdefghijklmnopqrstuvwxyz
  console.log(buffer.toString('utf-8',0,5))// kq: abcde
}
readDemo()

```

### Chuyển Buffer thành Json

```js
function bufToJson(){
   let buf = new Buffer('node js buffer')
   let json = buf.toJSON(buf)
   console.log(json);
   //{ type: 'Buffer',
  // data: [ 110, 111, 100, 101, 32, 106, 115, 32, 98, 117, 102, 102, 101, 114 ] }
 }

 bufToJson()


```

### Ghép nối các buffer 
> Buffer.concat(list[, totalLengh]) -> Giá trị trả về là buffer mới
- list: mảng các buffer thực hiện để ghép nối thành một Buffer
- totalLength: Tổng độ dài của các buffer sau khi được ghép nối
```js
function concatBuf(){
   let buf1 = new Buffer('Hoc node js ')
   let buf2 = new Buffer('tai techmaster')
   let buf3 = Buffer.concat([buf1,buf2])

   console.log('Độ dài buf ghép nối: ' + buf3.toString());
 }

 concatBuf()//Độ dài buf ghép nối: Hoc node js tai techmaster
```

### So sánh các buffer trong node js
> buf.compmare(otherBuffer) -> Trả về một giá trị dạng số thể hiện Buffer này là đứng trước, sau hay cùng thứ tự với Buffer kia.
```js
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
 }

 compareBuf() //node đứng sau techmaster

```

### Sao chép buffer 
> buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd]) -> phương thức không trả về giá trị
- argetBuffer - Đối tượng Buffer, đây là nơi Buffer sẽ được sao chép.
- targetStart - Dạng số, mặc định là 0.
- sourceStart - Dạng số, mặc định là 0.
- sourceEnd - Dạng số, mặc định là độ dài của buffer.   
```js
  let buf3 = new Buffer(5)
  buf3.copy(buf1) 
  console.log('buf3 :' + buf3); // buf3 :     
  console.log('buf3 :' + buf3.toString());

```
### Chia nhỏ các Buffer
> buf.slice([start][, end]) -> Trả về một Buffer mới mà tham chiếu tới cùng vùng bộ nhớ như Buffer cũ.
- start - Dạng số, giá trị mặc định là 0.
- end - Dạng số, giá trị mặc định là buffer.length

```js
  let buf4 = new Buffer('hoc lap trinh')
   let buf5 = buf4.slice(0,7)
   console.log(buf5.toString()) //hoc lap
   
```
### Độ dài buffer
> buf.length