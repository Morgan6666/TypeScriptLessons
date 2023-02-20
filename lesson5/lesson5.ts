//Импорт модуля событий

var Emmiter = require('events')



//Создадим объект класса Emmiter

let emitter = new Emmiter();



//Содадим событие eventName

let eventName = "hello";



//Привяжем к event handlers

emitter.on(eventName, function() {

  console.log("Hello all!")

});



emitter.on(eventName, function(){

  console.log("Hello world!");

});



//emmitter.emit ищет все обработчики и вызывает их

emitter.emit(eventName);



console.log(emitter)
