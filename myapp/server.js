const { json } = require('express');
const express = require('express');
const app = express();
const port = 3000
const fs = require('fs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

function readFile (path){
    var data = fs.readFileSync(path);
    return data;
}

function writeFile(path,data){
    fs.writeFileSync(path,data);
}

app.get('/users', function(request, response){
    var file = readFile('./person.json');
    response.send(file);
})

app.put('/users', function(request,response){
    var file = readFile('./person.json');
    var jsonData = JSON.parse(file);
    var keys = Object.keys(jsonData);
    console.log(keys);
    var obj = keys.length;
    obj++;
    console.log(obj);
    jsonData['person' + obj] = request.body;
    jsonData['person' + obj].id = obj;
    response.send(jsonData);
})

app.delete('/users/:id', function(request,response){
    var file = readFile('./person.json');
    var jsonData = JSON.parse(file);
    var id = request.params.id;
    for (person in jsonData){
        if(jsonData[person].id == id){
            delete jsonData[person];
            response.send(jsonData);
        }
    }
})

app.get('/users/:id', function(request,response){
    var file = readFile('./person.json');
    var jsonData = JSON.parse(file);
    var id = request.params.id;
    for (person in jsonData){
        if(jsonData[person].id == id){
            response.send(jsonData[person]);
        }
    }
})

app.post('/users/:id', function(request,response){
    var file = readFile('./person.json');
    var jsonData = JSON.parse(file);
    var id = request.params.id;
    for (person in jsonData){
        if(jsonData[person].id == id){
            jsonData['person' + id].age = 89;
            writeFile('./person.json', JSON.stringify(jsonData));
            response.send(jsonData[person]);
        }
    }
})
//app.get('/', (req, res) => {
//    res.send('Hello World!')
//})

//app.post('/', (req, res) => {
//    res.send('Got a POST request!')
//})

//app.put('/user', (req, res) => {
//    res.send('Got a PUT request at /user')
//})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})