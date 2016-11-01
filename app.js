var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

if (!Array.prototype.last) {
  Array.prototype.last = function() {
    return this[this.length - 1];
  };
};
//var routes = require('./routes/index');
//var downloadit = require('./routes/downloadit');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes); //instead we'll just let public(above) handle index.html.
app.get('/downloadit', function (req,res){
  var reqUrl = req.url.replace(/\/downloadit[/?]*/, '');
  reqUrl = reqUrl.replace('"', '%22');
  fs.open('./downloads.sh','a+',function(err,fd) {
    if (err) return console.error(err);
    fs.write(fd, 'wget \"' + reqUrl + '\";\r\n');//TODO: sanitize input and actually wget.
  });
  res.send('Download scheduled! <br>You should see your file at 192.168.0.115/files/'+reqUrl.split('/').last()+' tomorrow (and also on the thumbdrive).');
});
app.use('/files', express.static(path.join(__dirname, '../files')));//have static folder available


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  res.writeHead(404);
  res.end(err.message);
  
});

/* I didn't like the default error handlers, so commenting out.

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
*/

module.exports=app;
