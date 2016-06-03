var express = require('express'); //gives refrence to express

var app = express(); //instance of espress

var port = process.env.PORT || 5000; //port that express listen on you machine

//set the public directory as static
app.use(express.static('public'));
app.use(express.static('src/views'));

//route
app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/books', function (req, res) {
    res.send('hello Books');
});
app.listen(port, function (err) {
    console.log('runing port' + port);
});