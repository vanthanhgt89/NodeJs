// Function normal
let persons = ['a', 'b', 'c']

let newPerson = persons.map(function (person,index){
  return 'STT: ' + index + ' person: ' + person 
})

// arrow function
let newPerson1 = persons.map((person, index) => { 
  return `STT: ${index} name ${person}`
})

let newPerson2 = persons.map(person => `${person} name ${person}`) // Co 1 tham so co the viet tat

// console.log(newPerson);
// console.log(newPerson1);
// console.log(newPerson2);
// bind this
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


// var
function foo1() {
   var x = 10;
   if (true) {
      var x = 20; // x ở đây cũng là x ở trên
      console.log(x); // in ra 20
   }
   console.log(x); // vẫn là 20
}
foo1()
// let
function foo() {
   let x = 10;
   const a = 20
   if (true) {
      let x = 20; // x này là x khác rồi đấy
      const a = 10
      console.log('let x:' + x); // in ra 20
      console.log('const: a' + a);
   }
   console.log(x); // in ra 10
   console.log(a);
}
foo()