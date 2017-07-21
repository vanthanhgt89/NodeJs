// Khai bao module event 
let events = require('events')

//Tao mot doi tuong eventEmitter()
let eventEmitter = new events.EventEmitter()

// Kich hoat mot event: eventEmitter.emit('eventHanlder)
// Gan ket event voi  Event Handler: eventEmitter.on('eventName', eventHandler)


//Tao mot event Handler
let connectHanlder = function connected() {
  console.log('Ket noi thanh cong');
  // Kich hoat mot event
  eventEmitter.emit('data_received')
}
// Gan su kien connection voi event Handler
eventEmitter.on('connection', connectHanlder)

// Gan su kien data_received voi 1 ham an danh

eventEmitter.on('data_received', () => {
  console.log('Du lieu duoc tiep nhan thanh cong');
})

// Kich hoat su kien connection
eventEmitter.emit('connection')

console.log("end");


