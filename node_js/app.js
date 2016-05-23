var express = require('express')//gives refrence to express

var app = express(); //instance of espress

var port = 5000; //port that express listen on you michen
app.listen(port,function(err){
           console.log('runing port' + port);
           });

