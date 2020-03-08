const express = require('express');
const morgan = require('morgan');
const http = require ('http');


const app = express();

app.use(morgan('dev'));

app.get('/', function(req, res){
    res.status(200).send('server is working')
});

// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter

module.exports = app;