/**
 * Module dependencies.
 */

var express = require('express')
    ,api  = require('./routes/api')
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    , path = require('path');

var app = express();

app.set('port', 9000);
app.use(bodyParser());
//app.use(methodOverride());
app.use(express.static(path.join(__dirname, '..', 'node_modules')));
app.use(express.static(path.join(__dirname, '..', '.tmp')));
app.use(express.static(path.join(__dirname, '..', 'app')));

app.get('/api/movies', api.fetchMovies);
app.get('/api/movies/:id', api.fetchMovie);
app.get('/api/movies/:id/actors', api.fetchActorsOfMovie);
app.post('/api/movies', api.addMovie);
app.put('/api/movies', api.updateMovie);
app.delete('/api/movies/:id', api.deleteMovie);


module.exports = app;

console.log('Express server listening on port ' + app.get('port'));
