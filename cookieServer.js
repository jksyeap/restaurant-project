const express = require('express');
const cookieparser = require('cookie-parser');
var app = express();
app.use(cookieparser());

app.get('/', function(req,res) {
  res.cookie('firstcookie', 'midcookie', {path:'/'});
  res.cookie('secondcookie', 'leftcookie', {path:'/left'});
  res.cookie('thirdcookie', 'rightcookie', {path:'/right'});
  // let sentCookies = res.getHeader('set-cookie');
  // res.send("Testing cookies, mid path, I sent: " + sentCookies);
  let gotCookies = "{";
  for(let cookie in req.cookies)
    gotCookies += cookie + ":" + req.cookies[cookie] + ", ";
  gotCookies += "}";
  res.send("Testing cookies, mid path, server recieved: " + gotCookies);
});

app.get('/left', function(req,res) {
  let gotCookies = "{";
  for(let cookie in req.cookies)
    gotCookies += cookie + ":" + req.cookies[cookie] + ", ";
  gotCookies += "}";
  res.send("Testing cookies, left path, server recieved: " + gotCookies);
});

app.get('/right', function(req,res) {
  let gotCookies = "{";
  for(let cookie in req.cookies)
    gotCookies += cookie + ":" + req.cookies[cookie] + ", ";
  gotCookies += "}";
  res.send("Testing cookies, right path, server recieved: " + gotCookies);
});

let host = '127.3.2.1';
let port = '80';

app.listen(port, host, function() {
  console.log("Listening on " + host + ":" + port);
});