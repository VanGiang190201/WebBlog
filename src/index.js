const path = require('path');
const handlebars = require('express-handlebars');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log('PATH', path.join(__dirname, 'public'));
// Http logger
app.use(morgan('combined'));

//Template engine
app.engine(
  'hbs',
  handlebars.engine({ defaultLayout: 'main', extname: '.hbs' }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Route init
route(app);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
