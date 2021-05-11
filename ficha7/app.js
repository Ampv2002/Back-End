const { response } = require("express")
const http = require('http');
const express = require("express")
const fs = require("fs")
const app = express()
const port = 3000
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

//
//con.connect(function(err) {
//    if (err) throw err;
//    console.log("Connected!");
//    var sql = "CREATE TABLE persons(id INT AUTO_INCREMENT, firstname VARCHAR(100) NOT NULL, lastname VARCHAR(100) NOT NULL, profession VARCHAR(50) NOT NULL, age INT NOT NULL, PRIMARY KEY(id));";
//    con.query(sql, function (err, result) {
//      if (err) throw err;
//      console.log("Table created");
//    });
//  });

/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO persons (firstname, lastname, profession, age) VALUES ?";
    var values = [
      ['Tiago', 'Nacarato','musician','25'],
      ['John', 'Dee', 'mathematician', '75'],
      ['Sara', 'Sarapova', 'banker', '22']
    ];
    con.query(sql,[values], function (err, result) {
      if (err) throw err;
      console.log("Valores inseridos");
    });
});
*/


app.get('/persons', (request, response) => {
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM persons", "\n", function (err, result, fields) {
      if (err) throw err;
      response.send(result)
    });
  });
})


/*
app.get('/', (request, response) => {
  var sql = "INSERT INTO persons (firstname, lastname, profession, age) VALUES ('Emily','Smith','librarian','23')";
  con.query(sql, function(err,result){
    if (err) throw err;
    response.send("1 record inserted, ID:" + result.insertId)
  })
})
*/
app.delete('/persons/:id', function(request, response){
  var id = request.params.id
  var sql = "DELETE FROM persons WHERE id = {id}"
// var sql = "DELETE FROM persons WHERE id = ?";
  sql = sql.replace('{id}', id)
// con.query(sql, id, function(err,result,fields))
  con.connect(function(err) {
    if (err) throw err;
    con.query(sql, function (err, result) {
      if (err) throw err;
      response.send("Number of records deleted: " + result.affectedRows);
    });
  });
});

app.get('/persons/get/:id_user', function(request, response){
  var query = "SELECT * FROM persons WHERE id = ?";
  con.query(query, request.params.id_user, function(err, result){
    if(err) throw err;
    if (result == '')
      response.send("Id não existe!")
    else
      response.send(result)
  });
});

app.get('/persons/:age/:profesion', function(request,response){
  var age = request.params.age;
  var profession = request.params.profession;
  var query = 'SELECT * FROM WHERE age = ? AND profession = ?';
  con.query(query,[age,profession], function(err,result){
    if(err) throw err;
    if(result = '')
      response.send("Não existem entradas!");
    else
      response.send(result);
  });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})