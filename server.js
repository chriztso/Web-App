var express = require("express");
var bodyParser = require('body-parser')
var app = express(); 

var port = 3000; 


app.use(bodyParser.json());

app.post('/test', (req, res) => {
    var returnString = '';
   for(var i = 2; i < req.body["string_to_cut"].length; i+=3){
       returnString += req.body["string_to_cut"][i];
   }
   res.send(returnString);
})

app.listen(port, () => {console.log(`Listening at ${port}`)});
