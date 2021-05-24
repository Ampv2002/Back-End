var mysql = require('mysql');
const express = require  ('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });

 
/* 2.*/  

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

/* 2. a.*/

// con.connect(function(err){
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb", function (err, result){
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

    
  con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM cars", function (err, result, fields) {
        if (err) throw err;
        

        response.send(result);
      });
  

    });



});

/* b.*/
app.post('/car', function (request, response){

    

    con.connect(function(err) {

    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO cars (id, seller_id, brandmodel, description, price) VALUES ('','3','Ford Fiesta','Cinzento quarto portas','15000')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted, ID: ", + result.insertId);

      response.end("Carro adicionado com sucesso, ID: " + result.insertId);
    });

});
  
  });

/* c.*/
app.get('/carseller', function (request, response){

    
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM cars WHERE seller_id = 2", function (err, result, fields) {
          if (err) throw err;
        

          response.send(result);
        });
    

      });
  
  
  
  });

/* d.*/

app.post('/cars/:id', function (request, response){

    var id = request.params.id;

    con.connect(function(err) {
        if (err) throw err;
        con.query(`UPDATE cars SET cars.views = views+1 WHERE id = ${id} `, function (err, result, fields) {
          if (err) throw err;
        

          response.send(result);
        });
    

      });
  
  });

/* e. */

