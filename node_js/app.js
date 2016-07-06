var express = require('express'); //gives refrence to express

var app = express(); //instance of espress

var port = process.env.PORT || 5000; //port that express listen on you machine

var nav =[{
         Link:'/Books',
         Text:'Book'
                        },
          {
          Link:'/Authors',
          Text:'Author'}];


var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);


//set the public directory as static
app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine','ejs');

app.use('/Books',bookRouter);
app.use('/Admin',adminRouter);

//var handlebars = require('express-handlebars');
//app.engine('.hbs', handlebars({extname: '.hbs'}));
//
//
//app.set('view engine','.hbs');

//app.set('view engine','jade');
//route
app.get('/', function (req, res) {
    //res.send('hello world');
    res.render('index',{title:'hello from render',
                        nav: [{
                            Link:'/Books', Text:'Books'
                        },{
                            Link:'/Authors', Text:'Authors'}
                             ] 
                        });
});

app.get('/books', function (req, res) {
    res.send('hello Books');
});
app.listen(port, function (err) {
    console.log('runing port' + port);
});