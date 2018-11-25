var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');
var path = require('path');

var app = express();
const port = process.env.PORT || 3000;

const authorRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/boostrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/boostrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
    {link: '/books', title: 'Books'},
    {link: '/authors', title: 'Authors'}
];

const bookRouter = require('./src/routes/bookRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);


authorRouter.route('/')
    .get((req,res) => {
        res.send('Hello authors');
    });

app.use('/books', bookRouter);
app.use('/authors', authorRouter);
app.use('/admin', adminRouter);

app.get('/', (req, res) => {
    res.render(
        'index',
         {
            nav: [{link: '/books', title: 'Books'},
                  {link: '/authors', title: 'Authors'}],
            title: 'Library'
        });
    // res.sendFile(path.join(__dirname, '/views/index.html'));
    //  res.send('Hello World, Today is Sunday');
});

app.listen(port, () => {
    debug('Listening on port ' + chalk.green(port));
});