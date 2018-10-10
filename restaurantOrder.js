/*
    Restaurant Takeout ordering via web
*/
const foodMenu = require('./lunchTakeout.json'); // Our menu
var express = require('express');
var app = express();
app.use(express.static('public')); // For static assets
var bodyParser = require('body-parser');
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// Template system
const nunjucks = require('nunjucks');
nunjucks.configure('templates', {autoescape: true, express: app});

app.get('/', function(req, res) {
    res.render('TakeOutOrderForm.html', foodMenu);
});


/* Process the form below */


// What method should you use? Hint look at the order Form.
// What URL should you listen on?
// Do you need to process the body in any way?
// app.?method?('/?processing_url?', ?some_kind_of_body_parser?, function(req, res) {


//     Below is some code that I used to simplify the menu to make it
//      easier to look up prices. You don't have to use this.
//     let raw_menu = {};
//     for (let cat in foodMenu.menu) {
//         for (let item of foodMenu.menu[cat]) {
//             raw_menu[item.name] = item.price;
//         }
//     }
//     // console.log(JSON.stringify(raw_menu));  // for debugging

/*  You need to process the body (customer order here), compute item totals
    compute order subtotal, compute tax, and compute total.
 */
    // I'd use a template to render the order specific response.
//     res.render('TakeOutConfirmation.html', order);
// });

const host = '0.0.0.0';
const port = '8080';
app.listen(port, host, function () {
    console.log("restaurantOrder.js app listening on IPv4: " + host +
	":" + port);
});
