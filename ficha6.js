const express = require("express")
const fs = require("fs")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    fs.appendFile('log.txt', '', function(err){
        if(err){
            return console.error(err);
        }
        console.log("File opened!");
    })
})

