var fs = require('fs');
var textModule = require('./lorem')

// fs.open('texto.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

// fs.writeFile('texto.txt', textModule.texto , function(err){
//     if (err) throw err;
//     console.log('Replaced!');
// })


fs.readFile('./texto.txt','utf8', function(err, data){
  if (err) throw err; 
  // Display the file content
  console.log(data);
});