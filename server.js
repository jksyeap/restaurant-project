const express = require('express');
const DataStore = require('nedb');
var app = express();
const db = new DataStore({filename: __dirname + '/usernames', autoload: true})
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({extended:false})

app.put('/register', urlencodedParser, function(req,res) {
  let user = req.body;
  db.find({"name": user.name}, function(err,docs) {
    if(err) {
      console.log("Something is wrong");
    }
    else {
      let response = {};
      if(docs.length == 0)
      {
        db.insert(user);
        response.registration = "succeeded"
        response.user = user.name;
        response.reason = undefined;
        res.send(response);
      }
      else
      {
        response.registration = "failed";
        response.user = user.name;
        response.reason = "user already exists";
        res.send(response);
      }
    }
  })
})

let host = "0.0.0.0";
let port = "8080";

app.listen(port, host, function() {
  console.log("Listening on " + host + ":" + port);
})