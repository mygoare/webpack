var express = require('express');
var http = require('http');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var data = [
    {id: 1, author: 'Peter Hunt', text: 'This is one comment'},
    {id: 2, author: 'Jordan Walke', text: 'This is *another* comment'}
];
app.get('/data', cors(), function(req, res, next){
    res.json(data);
});

app.post('/data', cors(), function(req, res, next){
    var author = req.body.author;
    var text = req.body.text;

    data.push({id: Date.now(), author: author, text: text});
    res.json(data);
});

var server = http.createServer(app).listen(8081).on('listening', function(){
    console.log(server.address());
});
