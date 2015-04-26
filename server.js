// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var express    = require('express');		// call express
var app        = express(); 				// define our app using express
var mongoose   = require('mongoose');
var config 	   = require('./config');
var path       = require('path');

// APP CONFIGURATION ==================
// ====================================

// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));


// MAIN CATCHALL ROUTE --------------- 
// SEND USERS TO FRONTEND ------------
// has to be registered after API ROUTES
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/index.html'));
});

// START THE SERVER
// ====================================
app.listen(config.port);
console.log('Magic happens on port ' + config.port);