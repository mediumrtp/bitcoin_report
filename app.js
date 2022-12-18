const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const pug = require('pug');
const myController = require('./controler/myController');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.enable('view cache');
app.use('/', routes);
app.locals.getData = myController.getData

module.exports = app;