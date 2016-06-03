var express = require('express'); //gives refrence to express

var app = express(); //instance of espress

var port = process.env.PORT || 5000; //port that express listen on you machine

//set the public directory as static
app.use(express.static('public'));
app.set('views', './src/views');



app.set('view engine','ejs');


//var handlebars = require('express-handlebars');
//app.engine('.hbs', handlebars({extname: '.hbs'}));
//
//
//app.set('view engine','.hbs');

//app.set('view engine','jade');
//route
app.get('/', function (req, res) {
    //res.send('hello world');
    res.render('index',{title:'hello from render',list: ['a','b']});
});

app.get('/books', function (req, res) {
    res.send('hello Books');
});
app.listen(port, function (err) {
    console.log('runing port' + port);
});