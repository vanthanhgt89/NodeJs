let events = require('events')
let util = require('util')

let Person = function (name){
    this.name = name
}

util.inherits(Person, events.EventEmitter)

let james = new Person('james')
let marry = new Person('marry')
let ryu = new Person ('ryu')

let people = [james, marry, ryu] 


people.forEach( function (person){
    // console.log(person);
    person.on('speak', function (mssg){
        console.log(person.name + ' saild ' + mssg);
    } )
})

james.emit('speak','hello')