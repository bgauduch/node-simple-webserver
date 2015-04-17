var express = require('express');
var app = express();

app.use(require('morgan')('dev'));
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 80);