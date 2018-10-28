/*
    An example to test out session features in an extremely simplified
    login example.  This login has no authentication.

    We will keep the following session information per visitor:
    {loggedin: true/false, wavecount: number, windcount: number}

    We have the following paths: /, /wave, /wind, /login, /logout

    * The / path shows user their login status, and number of visits to /wave and /wind URLs

    * The /wave path doesn't require the user to login to see the "page"

    * The /wind path requires the user to be logged in to see the "page"\

    * To login just visit the /login URL (we are not demonstrating authentication here just flow)
        the /login view comes up with a new session ID as the users status has changed

    * Use the /logout URL to logout, remove all session state, and sends a response to remove the
      session cookie.

*/

var express = require('express');
var session = require('express-session');
 
var app = express();

const cookieName = "mq5839"; // Session ID cookie name, use this to delete cookies too.

app.use(session({
    secret: 'web systems CSUEB',
    resave: false,
    saveUninitialized: false,
    name: cookieName // Sets the name of the cookie used by the session middleware
}));
 

app.get('/', function(req, res) { // Initializes session information
  console.log(`session object: ${JSON.stringify(req.session)}`);
  console.log(`session id: ${req.session.id}`);
  if (!req.session.user) {
      req.session.user = {loggedin: false, wavecount: 0, windcount: 0};
  }
  let user = req.session.user;
  let message = `Hi! logged in: ${user.loggedin}, waves: ${user.wavecount}, wind: ${user.windcount}`;
  res.send(message);
});

app.get('/wave', function (req, res, next) {
    if (!req.session.user) {
        res.redirect("/");  // Make users start on the home page to initialize things.
    } else {
        req.session.user.wavecount += 1;
        res.send(`Waves: wavecount: ${req.session.user.wavecount}`);
    }
});
 
app.get('/wind', function (req, res, next) {
    if (!req.session.user) {
        res.redirect("/");  // Make users start on the home page to initialize things.
    } else {
        if (req.session.user.loggedin) {
            req.session.user.windcount += 1;
            res.send(`Wind: wind count: ${req.session.user.windcount}`);
        } else {
            res.send(`Sorry you have to login to see the wind!`);
        }
    }
});

app.get('/login', function (req, res, next) {
    if (!req.session.user) {
        res.redirect("/");  // Make users start on the home page to initialize things.
    } else {
        // Save session information, create a new session
        let oldInfo = req.session.user;
        req.session.regenerate(function(err) {
            req.session.user = Object.assign({}, oldInfo, {loggedin: true});
            res.send('You are logged in!');
        });
    }
});

app.get('/logout', function (req, res, next) {
    if (!req.session.user) {
        res.redirect("/");  // Make users start on the home page to initialize things.
    } else {
        // Save session information, create a new session
        let options = req.session.cookie;
        req.session.destroy(function(err){
            res.clearCookie(cookieName, options); // the cookie name and options
            res.send("You are now logged out!");
        })
    }
});


const host = '127.0.0.1';
const port = '5555';
app.listen(port, host, function () {
    console.log("expressSessionTest.js app listening on IPv4: " + host +
	":" + port);
});