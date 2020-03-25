const express = require('express');
const morgan = require('morgan');
const http = require ('http');
const axios = require('axios');
const instance = axios.create();
const cache = {}

//App
const app = express();

//Morgan
app.use(morgan('dev'));

//First Route
app.get('/', function(req, res){

// movieId query parameter below returns empty object
const movieId = req.query;
console.log(movieId)

// Object keys method below will target key value (ex. i,t,s) of object in index 0. 
const keys = Object.keys(movieId)[0];

// Object values method will target value (movie Id number or name of movie)
const values = Object.values(movieId)[0];

// target query values in URL 
const url = (`http://www.omdbapi.com/?${keys}=${values}+&${process.env.OMDB_API_KEY}`);


// axios instance used for testing and to make get request to URL and verifying previous cache url requests
if(cache[url]){
    res.send(cache[url])
} else{

instance.get(url)
    // if url query is already in cache, cache will send movie data as a response. if not, get request will be made to retrieve movie data and store it into cache history. 
    .then(response => cache[url] = response.data)
    .then(response => res.send(response))
    .catch(err => console.log(err))


}});




// response below creates object on webpage
// res.json(movieId); 


// var idKey below targets id of json object
//  var idKey = req.query.i;



// console.log("server is working")
// res.status(200).send('server is working');


// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter

module.exports = app;