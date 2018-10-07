/*  Gives the population of a country based on a JSON
    file of population information. */

const express = require('express');
var app = express();
const nunjucks = require('nunjucks');

nunjucks.configure('templates', {
    autoescape: true,
    express: app
});
// The population data
const populations = require('./country-by-population.json');

let host = '0.0.0.0'; // Choose a different loopback address
let port = '8080'; // Last digits of your NetID
let myName = 'Justin Yeap'; // Change this too.

let info = {host: host, port: port, name: myName}


app.get('/', function (req, res) {
    res.render('hello.html', info);
});


app.get('/country/:cname', function (req, res) {
    let country = req.params.cname;
    let renderInfo = {};
    renderInfo["found"] = false;
    let target = populations.find(function(element) {
      return element["country"] == country;
    })
    if(target != undefined) {
      renderInfo["found"] = true;
      renderInfo["country"] = target["country"];
      renderInfo["population"] = target["population"];
    }
    // Populate render info here with the stuff you
    // Need in the template.  Hint use Javascript array
    // Methods such as find and filter, and use
    // Javascript String methods like slice and toUpperCase...
    // You need to create the population.html template file
    // in the `templates` directory...
    res.render('population.html', renderInfo);
});


app.listen(port, host, function () {
    console.log("Example app listening on IPv4: " + host +
	":" + port);
});