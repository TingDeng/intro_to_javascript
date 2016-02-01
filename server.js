var express = require('express'),
    logger  = require('morgan')('dev'),
    server  = express();


/*
 * Setting up middleware
 * This section will be used to setup handling logging, static directories, and future features
 *
*/

//Set up the static public directory
server.use(express.static(__dirname+'/public'));
//set up the logger function
server.use(logger);

server.get('/', function(req, res){
  res.sendFile('html/index.html', { root: __dirname + '/public' });
});

server.listen(8080, function(){
  console.log('Now listening on port ' + 8080);
});
