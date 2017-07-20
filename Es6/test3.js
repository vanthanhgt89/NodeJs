var info = {
    name: 'thanh', 
    setName: function(name) {
         this.name = name
         console.log(this.name);
    }
}

let name = 'Bui van thanh'

function test(callback){
    // return callback        
    return callback
    // callback.apply(callbackObject, [name])

}
// // Goi den ham va truyen callback

test(info.setName(name));
// console.log(info.name) // ket qua khong doi 'thanh'

class Test {
  constructor(){
    this.name = 'thanh'
  }
  setName(){
    console.log(this.name);
  }
  test(){
   return this.setName(this.name)
  }
}

let test1 = new Test() 

test1.name = 'Bui van thanh'
test1.test(test1.setName())