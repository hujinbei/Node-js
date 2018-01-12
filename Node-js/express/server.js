var express = require('express');

const server = express();

server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');

server.get('/', function (req, res) {
	res.render('reg');
});

server.get('/login', function (req, res) {
	res.render('index');
});

// port = 3000;
server.listen(3000);
console.log("server is running in localhost:3000");