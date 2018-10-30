const express = require('express');
const DataStore = require('nedb');
var app = express();
const db = new DataStore({filename: __dirname + '/usernames', autoload: true});
var bodyparser = require('body-parser');
var jsonencodedParser = bodyparser.json();
const argon2 = require('argon2');

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
        argon2.hash(user.password).then(hash => {
          user.password = hash;
          db.insert(user);
          response.registration = "succeeded";
          response.user = user.name;
          response.reason = undefined;
          res.send(JSON.stringify(response));
        });
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

app.get('/allUsers', jsonencodedParser, function(req,res) {
  let query = req.body;
  db.find({"name":query.Rname}, function(err,docs) {
    if(err)
      {console.log("database error");}
    else {
      if(docs.length == 0)
      {
        console.log("User not registered");
        res.send(JSON.stringify({"error":"User not registered"}));
      }
      else {
        argon2.verify(docs[0].password,query.Rpassword).then(match => {
          if(match) {
            let time = new Date();
            let response = {"date":time.toString()};
            db.find({}, function(err,docs) {
              if(err)
                {console.log("database error");}
              else {
                let names = [];
                for(let doc of docs)
                  names.push(doc.name);
                response.users = names;
                res.send(JSON.stringify(response));
              }
            });
          }
          else
          {
            console.log("Incorrect Password");
            res.send(JSON.stringify({"error":"Incorrect Password"}));
          }
        });
      }
    }
  });
});

app.get('/nickname', jsonencodedParser, function(req,res) {
  let query = req.body;
  console.log(query);
  db.find({"name": query.Rname}, function(err,docs) {
    if(err)
      {console.log("database error");}
    else
    {
      let response = {};
      if(docs.length == 0)
      {
        console.log("Not a registered user");
        response.Rname = query.Rname;
        response.error = "Not a registered user";
        res.send(JSON.stringify(response));
      }
      else
      {
        argon2.verify(docs[0].password,query.Rpassword).then(match => {
          if(match) {
            db.find({"name":query.user}, function(err,docs) {
              if(err)
                {console.log("database error");}
              else
              {
                if(docs.length == 0)
                {
                  console.log("User not found");
                  response.user = query.user;
                  response.error = "User not found";
                  res.send(JSON.stringify(response));
                }
                else
                {
                  console.log("User found");
                  response.user = docs[0].name;
                  response.nickname = docs[0].nickname;
                  res.send(JSON.stringify(response));
                }
              }
            });
          }
          else {
            console.log("Incorrect Password");
            response.Rname = query.Rname;
            response.error = "Incorrect Password";
            res.send(JSON.stringify(response));
          }
        });
      }
    }
  });
});

let host = "127.3.2.1";
let port = "80";

app.listen(port, host, function() {
  console.log("Listening on " + host + ":" + port);
});
