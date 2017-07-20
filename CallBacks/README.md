# Callback được hiểu như thế nào?
### Callback function
* Callback function tạm hiểu là một function A được truyền vào function B dưới dạng tham số của B
* Lúc này B gọi đến A để thực hiện một chức năng nào đó mà A nắm giữ
* Callback sử dụng trong trường hợp thục thi liên quan tới nhập xuất dữ liệu như dowload, đọc ghi file và giao tiếp cơ sở dữ liệu...
### Nguyên tắc khi thực hiện callback
* Kiểm tra tham số Callback phải là function
```js
 function createName(callback){
     if(typeof callback !== 'function'){
         throw new Error('callback is function')
     }
 }

```
* Cẩn thận khi dùng từ khóa this trong Object
> Theo đúng nguyên tắc thì hàm callback là một hàm đơn phương nên khi sử dụng từ khóa this trong hàm nó hiểu this lúc này chính là window object vì vậy dù bạn định nghĩa callback trong 1 object thì không thể truy cập đến dữ liệu của object thông qua từ khóa this

```js
var info = {
    name: 'thanh', 
    setName: function(name) {
         this.name = name
    }
}
function test(callback){
    return callback('Bui van thanh')
}
// Goi den ham va truyen callback
test(info.setName)

console.log(info.name) // ket qua khong doi 'thanh'
// this chính là window object
```
* Cách khắc phục this trong hàm callback Object
  * Sử dụng apply or call
  ```js
  // Object chứa callback
  var info = {
    name: 'thanh', 
    setName: function(name) {
         this.name = name
    }
}

// Hàm chứa callback
function test(callback, callbackObject){
    let name = 'Bui Van Thanh'
     callback.apply(callbackOject,[name] )
}
// Goi den ham va truyen callback
test(info.setName,info)
console.log(info.name)// return Bui van thanh

  ```

  * Expamle dowload
  ```js
  // Viec dowload co the keo dai thoi gian, chuong trinh khong de dung de dowload xong moi chay tiep
let photo  = dowloadPhoto('https://abc.com')

// Gan callback cho su kien dowload khi nao dowload xong chay ham callback
dowloadPhoto('https://abc.com', handlePhoto)

function handlePhoto(err,photo){
  if(err) throw new Error ('Dowload error!')
  else console.log('Dowload finished', photo);
}
  ```


  ## Callback hell là gì
  * Callback hell là tập hợp nhiều công việc theo thứ tự lần lượt
  ```js
  function doA(job, time, doneJob) {
  setTimeout(() => {
    return doneJob(false, 'A')
  }, time)
}

function doB(job, time, doneJob) {
  setTimeout(() => {
    return doneJob(false, 'B')
  }, time)
}

function doC(job, time, doneJob) {
  setTimeout(() => {
    return doneJob(false, 'C')
  }, time)
}


function main() {
  doA('A', 2000, (err, res) => {
    console.log('done: ', res);
    doB('B', 1000, (err, res) => {
      console.log('done: ', res);
      doC('C', 1000, (err, res) => {
        console.log('done: ', res);
      })
    })
  })
}
main()
// ket qua
// done:  A 
// done:  B 
// done:  C
  ```
  * Khắc phuc callback hell với số lượng lớn các công việc lồng nhau nên đặt tên mỗi hàm tác biệt khỏi callback chính