const { response } = require("express")
const http = require('http');
const express = require("express")
const fs = require("fs")
const app = express()
const port = 3000
const body = 'Hello World!'

function readFile (path){
    var data = fs.readFileSync(path);
    return data;
}

function writeFile(path,data){
    fs.appendFileSync(path,data);
}

app.get('/log', (request, response) => {
    var date_log1 = new Date()
    writeFile('./log.txt', 'Request on /log - ')
    writeFile('./log.txt', date_log1.toDateString())
    writeFile('./log.txt', '\n')
    var log = readFile('./log.txt')
    response.writeHead(200,{
        'Content-Length': Buffer.byteLength(log),
        'Content-Type': 'text/text'
    });
    response.end(log);
})

app.get('/', (request, response) => {
    var date_log2 = new Date()
    writeFile('./log.txt', 'Request on root - ')
    writeFile('./log.txt', date_log2.toDateString())
    writeFile('./log.txt', '\n')
    response.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/text'
    });
    response.end(body);
})

app.get('/html', (request, response) => {
    var date_log3 = new Date()
    writeFile('./log.txt', 'Request on /html - ')
    writeFile('./log.txt', date_log3.toDateString())
    writeFile('./log.txt', '\n')
    var page = '<!DOCTYPE html><html><head><title>Portal</title></head><body><h1>Im in Space!</h1><p>{message}</p></body></html>';
    var date = new Date();
    page = page.replace('{message}', date.toDateString());
    response.writeHead(200,{
        'Content-Length': Buffer.byteLength(page),
        'Content-Type': 'text/html'
    });
    response.end(page);
})
  
app.get('/users/:name', function(request,response){
    var date_log4 = new Date()
    writeFile('./log.txt', 'Request on /users/:name - ')
    writeFile('./log.txt', date_log4.toDateString())
    writeFile('./log.txt', '\n')
    var msg = 'Welcome {name} !';
    var name = request.params.name;
    msg = msg.replace('{name}',name.toString());
    response.writeHead(200,{
        'Content-Length': Buffer.byteLength(msg),
        'Content-Type': 'text/text'
    });
    response.end(msg);
})

app.get('/download', function(request,response){
    var date_log5 = new Date()
    writeFile('./log.txt', 'Request on /download - ')
    writeFile('./log.txt', date_log5.toDateString())
    writeFile('./log.txt', '\n')
    const file = './log.txt';
    response.download(file);
})

//Ex9 - Incompleto
app.get('/clear', function(request,response){
    fs.unlinkSync('./log.txt')
    var text = "Ficheiro apagado!"
    response.writeHead(200,{
        'Content-Length': Buffer.byteLength(text),
        'Content-Type': 'text/html'
    });
    response.end(text);
})
//

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    fs.appendFile('log.txt', '', function(err){
        if(err){
            return console.error(err);
        }
        console.log("File opened!");
    })
})
