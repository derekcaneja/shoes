var express = require('express')
  , routes  = require('./routes')
  , http    = require('http')
  , path    = require('path')
  , hhBrown = require('hhbrown');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/color', routes.color);
app.get('/results', routes.results);

hhBrown.connect('53e629fe2009340200000022', 'CvbfKmMkDkdlXUU4tUHsMaMr', function() {
  
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
