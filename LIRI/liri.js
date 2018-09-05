require("dotenv").config();
var keys = require(".keys");
var request = require("request");
var fs = require("fs");
var twitter = require("twitter");
var spotify = require('node-spotify-api');
 
function tweets() {
    var client = new Twitter({
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: ''
      });
    var params = {screen_name: 'sn4rcbsomapr18'}; // actual screenname
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
     if (!error) {
        console.log(tweets);
     }
    });  

var request = require('request');
request('http://www.omdbapi.com/?i=tt3896198&apikey=f76487ff', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

    var spotify = new Spotify({
    id: <your spotify client id>,
    secret: <your spotify client secret>
      });
 
    spotify
     .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
     .then(function(data) {
      console.log(data); 
    })
    .catch(function(err) {
    console.error('Error occurred: ' + err); 
    });