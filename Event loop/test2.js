let events = require('events')
let eventEmitter = new events.EventEmitter()

let listner1 = () =>{
  console.log('Listner 1 duoc thuc thi');
}
let listner2 = ()=>{
  console.log('Listner 2 duoc thuc thi');
}
let listner3 = ()=>{
  console.log('Listner 3 duoc thuc thi');
}

eventEmitter.on('connection', listner1)
eventEmitter.on('connection', listner2)

// Kiem tra so luong cac listner dang lang nghe
let eventListners = events.EventEmitter.listenerCount(eventEmitter, 'connection')
console.log(eventListners + ' Event Listner dang lang nghe su kien connection');
console.log('------------');
eventEmitter.emit('connection')

// Xoa mot listner
// eventEmitter.removeListener('connection', listner1)
eventEmitter.removeAllListeners('connection', listner1)// Xoa toan bo

console.log('listen1 khong lang nghe');
console.log('------------');


// Sau khi remove kiem tra lai
eventListners = events.EventEmitter.listenerCount(eventEmitter, 'connection')
console.log(eventListners + ' Event Listner dang lang nghe su kien connection');
console.log('------------');

// Them mot su kien connection vao mang Listener
eventEmitter.addListener('connection', listner3)

// Tra ve 1mang cac su kien da thiet lap
eventEmitter.listeners('connection')
console.log(eventEmitter.listeners('connection'));

eventEmitter.emit('connection', listner1,listner3)
console.log(eventEmitter.emit('connection', listner1));