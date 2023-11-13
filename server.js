const express = require('express');
const app = express();
app.use(express.json())
const port = 3000;

let json = {
    msg: "Hello world"
};

app.get('/',(req,res) => {

    //res.send(JSON.stringify(json));

    res.json(json);


})

app.get("/echo/:id",(req,res) => {
    res.json({
        id: req.params.id
    })
})


app.post("/sum",(req,res) => {
    let numbers = req.body.numbers;
    let sum = 0;
    numbers.forEach(number => {
        sum += number
    });

    res.json({
        sum: sum
    })
})

app.listen(port, ()=> console.log('listening port:' + port));


/*
const http = require('http');

http.createServer(function(reg,res) {
    res.write("Henlo papi\n This is new");
    res.end();
    console.log("The server is running :D");

}).listen(8000); */