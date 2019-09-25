const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const Sequelize = require("sequelize");

const index = require('./src/index');

const app = express();

// sequelize 
var corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname, "client"));

app.use('/api/v1/', index);

module.exports = app;