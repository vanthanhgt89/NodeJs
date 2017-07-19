# Callback được hiểu như thế nào?
### Callback function
* Callback function tạm hiểu là một function A được truyền vào function B dưới dạng tham số của B
* Lúc này B gọi đến A để thực hiện một chức năng nào đó mà A nắm giữ
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