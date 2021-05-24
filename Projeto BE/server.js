const { response } = require("express")
const http = require('http');
const express = require("express")
const fs = require("fs")
const app = express()
const port = 3000
var mysql = require('mysql');

app.use(express.json());

app.use(express.urlencoded({extended: true}))
 
/* 2.*/  

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Projeto"
});

/* 2. a.*/

// con.connect(function(err){
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE Projeto", function (err, result){
//       if (err) throw err;
//       console.log("DataBase created");
//   });
// });

// con.connect(function(err){
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE Cars (id INT, seller_id int, brandmodel VARCHAR(255),description VARCHAR(255), price decimal, url VARCHAR(255), views int, images json, comments json, tags json)";
//   con.query (sql, function(err, result){
//       if (err) throw err;
//       console.log("Table created");
//   })
// });

/* 4.*/


/* a.*/
app.get('/cars', function (request, response){
      con.query("SELECT * FROM cars", function (err, result, fields) {
        if (err) throw err;
        response.send(result);
      });
});

/* b.*/

app.post('/AddCar', function (request, response){
    console.log("Connected!");
    var sql = "INSERT INTO cars (id, seller_id, brandmodel, description, price, views) VALUES ('','20','Volvo','Preto, quarto portas','15500','0')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted, ID: ", + result.insertId);
      response.end("Carro adicionado com sucesso, ID: " + result.insertId);
    });
});

/* c.*/
app.get('/carseller', function (request, response){
      var seller_id = request.query.seller_id;
      con.query("SELECT * FROM cars WHERE seller_id = ?", seller_id, function (err, result, fields) {
        if (err) throw err;
        response.send(result);
      });
});

/* d.*/

app.post('/cars/:id', function (request, response){
    var id = request.params.id;
    con.query(`UPDATE cars SET cars.views = views+1 WHERE id = ${id} `, function (err, result, fields) {
      if (err) throw err;
      response.send(result);
    });
});


/* e. */
app.get('/tags', function (request, response){

  var tag_sql = "SELECT JSON_VALUE(tags,'$[0].cor') FROM cars "
  con.query(tag_sql, function (err, result, fields) {
    if (err) throw err;
    response.send(result);
  });
});

/* Parte B - A*/
app.get('/carsQuery', function (request, response){
  var id = request.query.id;
  con.query(`SELECT * FROM cars WHERE id = ? `, id, function (err, result, fields) {
    if (err) throw err;
    response.send(result);
  });
});

/* B */
app.delete('/cars/:id', function(request, response){
  var id = request.params.id
  var sql = "DELETE FROM cars WHERE id = ?"
  con.query(sql, id, function (err, result, fields){
    if (err) throw err;
    if (result == '')
      response.send("Id não existe!")
    else
      response.send(result)
      console.log("Affected rows:", result.affectedRows)
  });
});

/* C */
app.post('/carsImage/:id', function(request, response){
  var id = request.params.id
  var path = './images/{id}.jpg'
  path = path.replace('{id}', id)
  con.query('UPDATE cars SET images = ? WHERE id = ?', [path, id], function(err, result, fields){
    if (err) throw err;
    response.send(result)
  });
});

app.get('/carsImage/:id', function(request, response){
  var id = request.params.id
  var path = './images/{id}.jpg'
  path = path.replace('{id}', id)
  con.query('SELECT images FROM cars WHERE id = ?', [id], function(err, result, fields){
    if (err) throw err;
    response.send(result)
  });
});


/* D */
app.post('/carsComment', function(request, response){
  var id = request.query.id
  var coment = request.body
  con.query("UPDATE cars SET ? WHERE id = ?",[coment, id], function(err, result, fields){
    if (err) throw err;
    response.send(result)
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});