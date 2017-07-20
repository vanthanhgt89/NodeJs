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