# ES6 những điều cần biết
## Arrow function
* Thay thế từ khoá function bằng arrow (=>) giúp hàm ngắn  gọn hơn

```js
// Function normal
let persons = ['a', 'b', 'c']

let newPerson = persons.map(function (person,index){
  return 'STT: ' + index + ' person: ' + person 
})

// arrow function
let newPerson1 = persons.map((person, index) => { 
  return `STT: ${index} name ${person}`
})
console.log(newPerson);// kết quả như nhau
console.log(newPerson1);
```
* Không bind với this
  * Trong javascript, function có thể coi như một object vì thế từ khoá this trỏ đến chính function đó
```js
 function Arr(){
  this.exp = 12
  this.arr = [1,2,3,4]
  this.list = function(){
    this.arr.forEach(function(item){
      console.log(this.exp)
    },this)
  }
}

function Arr(){
  this.exp = 12
  this.arr = [1,2,3,4]
  this.list = function(){
    this.arr.forEach(function(item){
      console.log(this.exp)
    }.bind(this))
  }
}
function Arr(){
  this.exp = 12
  this.arr = [1,2,3,4]
  this.list = function(){
    this.arr.forEach((item)=>{
      console.log(this.exp)
    })
  }
}

let arr = new Arr()
arr.list()
```

## let , const , var
* let, const chỉ có tác dụng scoped trong {} chứa nó
* var tồn tại trong toàn functionfunction

```js
// var
function foo() {
   var x = 10;
   if (true) {
      var x = 20; // x ở đây cũng là x ở trên
      console.log(x); // in ra 20
   }
   console.log(x); // vẫn là 20
}
// let
function foo() {
   let x = 10;
   <!--const a = 10;-->
   if (true) {
      let x = 20; // x này là x khác rồi đấy
      console.log(x); // in ra 20
      <!--console.log(a)-->
   }
   console.log(x); // in ra 10
   <!--console.log(a)-->
}
```
