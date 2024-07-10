
http = require('node:http');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("dfdfdfdf");
})
server = http.createServer(app);
server.listen(5001);

const mongoose = require("mongoose")
const url = "mongodb+srv://user:0000@cluster0.rbzjgeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url).then(()=>{
    console.log("mongodb well conected")
})
.catch((err)=>{
    console.log(err)
})





console.log('Server running at http://127.0.0.1:5001/');