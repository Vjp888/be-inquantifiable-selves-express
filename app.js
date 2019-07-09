require('dotenv').config()

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var chartsRouter = require('./routes/charts');
var foodsRouter = require('./routes/api/v1/foods');
var mealsRouter = require('./routes/api/v1/meals');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/charts', chartsRouter);
app.use('/api/v1/foods', foodsRouter);
app.use('/api/v1/meals', mealsRouter);


module.exports = app;
