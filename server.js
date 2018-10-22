const express = require('express');
const DataStore = require('nedb');
var app = express();
const db = new DataStore({filename: __dirname + '/usernames', autoload: true});
var bodyparser = require('body-parser');
var jsonencodedParser = bodyparser.json();

app.put('/register', jsonencodedParser, function(req,res) {
  let user = req.body;
  db.find({"name": user.name}, function(err,docs) {
    if(err) 
      {console.log("database error");}
    else 
    {
      let response = {};
      if(docs.length == 0)
      {
        db.insert(user);
        response.registration = "succeeded";
        response.user = user.name;
        response.reason = undefined;
        res.send(JSON.stringify(response));
      }
      else
      {
        response.registration = "failed";
        response.user = user.name;
        response.reason = "user already exists";
        res.send(JSON.stringify(response));
      }
    }
  });
});

app.get('/allUsers', function(req,res) {
  let time = new Date();
  let response = {"date":time.toString()};
  db.find({}, function(err,docs) {
    if(err) 
      {console.log("database error");}
    else
    {
      let names = [];
      for(let doc of docs)
        names.push(doc.name);
      response.users = names;
      res.send(JSON.stringify(response));
    }
  });
});

app.get('/nickname', jsonencodedParser, function(req,res) {
  let query = req.body;
  console.log(query);
  db.find({"name": query.user}, function(err,docs) {
    if(err) 
      {console.log("database error");}
    else
    {
      let response = {};
      if(docs.length == 0)
      {
        response.user = query.user;
        response.error = "Not Found";
        res.send(JSON.stringify(response));
      }
      else
      {
        response.user = docs[0].name;
        response.nickname = docs[0].nickname;
        res.send(JSON.stringify(response));
      }
    }
  });
});

let host = "0.0.0.0";
let port = "8080";

app.listen(port, host, function() {
  console.log("Listening on " + host + ":" + port);
});