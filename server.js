
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.render('index');
})
app.post('/', function (req, res) {
	res.render('index');
	console.log(req.body.city);
})
app.listen(8081, function () {
	console.log('App listening on port 8081');
})






/* Old.  Not express.
let http = require("http");

http.createServer(function (request, response) {
	// Send the HTTP header 
	// HTTP Status: 200 : OK
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	
	// Send the response body as "Hello World"
	response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/'); */