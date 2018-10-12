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
app.post('/web_order', urlencodedParser, function(req, res) {


//     Below is some code that I used to simplify the menu to make it
//      easier to look up prices. You don't have to use this.
    let raw_menu = {};
    for (let cat in foodMenu.menu) {
        for (let item of foodMenu.menu[cat]) {
            raw_menu[item.name] = item.price;
        }
    }
    //console.log(JSON.stringify(raw_menu));  // for debugging
    let info = req.body;
    let order = {"items":[],"subtotal":0.0,"tax":0.0,"grandTotal":0.0};
    for(let item in info) {
        if((info[item]) > 0) {
            let temp = {};
            temp["name"] = item;
            temp["quantity"] = info[item];
            temp["itemTotal"] = (raw_menu[item] * info[item]);
            order.items.push(temp);
        }
    }
    for(let entry of order.items) {
        order.subtotal += entry.itemTotal;
        entry.itemTotal = entry.itemTotal.toFixed(2);
    }
    order.subtotal = order.subtotal;
    order.tax = (0.0725 * order.subtotal);
    order.grandTotal = (order.tax + order.subtotal);
    
    order.subtotal = order.subtotal.toFixed(2);
    order.tax = order.tax.toFixed(2);
    order.grandTotal = order.grandTotal.toFixed(2);

    //console.log(JSON.stringify(order));
    res.render('TakeOutConfirmation.html', order);
});

const host = '127.3.2.1';
const port = '5839';
app.listen(port, host, function () {
    console.log("restaurantOrder.js app listening on IPv4: " + host +
	":" + port);
});
