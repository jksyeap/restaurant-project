const request = require('request');

// request.put({uri:"http://0.0.0.0:8080/register", json:true, body:{"name":"Owen", "nickname":"Vanilla"}}, function(error,response,body) {
//   console.log(body);
// });

// request.put({uri:"http://0.0.0.0:8080/register", json:true, body:{"name":"Steve", "nickname":"Outback"}}, function(error,response,body) {
//   console.log(body);
// });

// request.put({uri:"http://0.0.0.0:8080/register", json:true, body:{"name":"Pack", "nickname":"Half-Pint"}}, function(error,response,body) {
//   console.log(body);
// });

// request.put({uri:"http://0.0.0.0:8080/register", json:true, body:{"name":"Danny", "nickname":"Doughboy"}}, function(error,response,body) {
//   console.log(body);
// });

// request.put({uri:"http://0.0.0.0:8080/register", json:true, body:{"name":"Karen", "nickname":"Six Feet"}}, function(error,response,body) {
//   console.log(body);
// });

// request.get("http://0.0.0.0:8080/allUsers", function(error,response,body) {
//   console.log(body);
// })

request.get({uri:"http://0.0.0.0:8080/nickname", json:true, body:{"user":"Karen"}}, function(error,response,body) {
  console.log(body);
});

request.get({uri:"http://0.0.0.0:8080/nickname", json:true, body:{"user":"Danny"}}, function(error,response,body) {
  console.log(body);
});

request.get({uri:"http://0.0.0.0:8080/nickname", json:true, body:{"user":"Joe"}}, function(error,response,body) {
  console.log(body);
});