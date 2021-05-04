var Emitter = require("./emitter");
var eventConstants = require('./config');
var emtr = new Emitter();
emtr.on(eventConstants.events.FILESAVED, function(){
    console.log("A file was saved 1");
});
emtr.on(eventConstants.events.GREET,function(){
    console.log("Hello");
});
emtr.emit(eventConstants.events.FILESAVED);
emtr.emit(eventConstants.events.GREET);
