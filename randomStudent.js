/* A simple web server to return random rolls of the dice.
   You cannot use templates in this exercise. */

var express = require('express');
var app = express();
host = '127.3.2.1'; // Choose a different loopback address
port = '5839'; // Last digits of your NetID

function getRandomInt(max) { // From 1 to max
  return Math.floor(Math.random() * Math.floor(max) + 1);
}

app.get('/', function (req, res) {
    let response = `Hello Web Systems! From address ${host} and port ${port}<br><br>This is from the dice roller application<br><br>Initial roll: ${getRandomInt(6)}`;
    res.send(response);
});

app.get('/one', function(req,res) {
  let response = `You rolled: ${getRandomInt(6)}`;
  res.send(response);
});

app.get('/two', function(req,res) {
  let response = `You rolled: ${getRandomInt(6)} and ${getRandomInt(6)}`;
  res.send(response);
});
// Other view functions as needed here.


app.listen(port, host, function () {
    console.log("Example app listening on IPv4: " + host +
	":" + port);
});