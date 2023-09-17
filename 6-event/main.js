//módulo de eventos
const event = require('events');

//manipulador de eventos
const eventEmitter = new event.EventEmitter();

//adiciona o evento
eventEmitter.on('connected',function(){
 console.log('> user connected');
});

//chama o evento
eventEmitter.emit('connected');