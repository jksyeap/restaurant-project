const request = require('request');

request.put({uri:"http://0.0.0.0:8080/register", json:true, body:{"name":"Owen", "nickname":"Vanilla", "password":"node"}}, function(error,response,body) {
  console.log(body);
});

request.put({uri:"http://0.0.0.0:8080/register", json:true, body:{"name":"Steve", "nickname":"Outback", "password":"express"}}, function(error,response,body) {
  console.log(body);
});

request.put({uri:"http://0.0.0.0:8080/register", json:true, body:{"name":"Pack", "nickname":"Half-Pint", "password":"request"}}, function(error,response,body) {
  console.log(body);
});

request.put({uri:"http://0.0.0.0:8080/register", json:true, body:{"name":"Danny", "nickname":"Doughboy", "password":"json"}}, function(error,response,body) {
  console.log(body);
});

request.put({uri:"http://0.0.0.0:8080/register", json:true, body:{"name":"Karen", "nickname":"Six Feet", "password":"metalsmith"}}, function(error,response,body) {
  console.log(body);
});

// request.get("http://0.0.0.0:8080/allUsers", function(error,response,body) {
//   console.log(body);
// })

// request.get({uri:"http://0.0.0.0:8080/nickname", json:true, body:{"user":"Karen"}}, function(error,response,body) {
//   console.log(body);
// });

// request.get({uri:"http://0.0.0.0:8080/nickname", json:true, body:{"user":"Danny"}}, function(error,response,body) {
//   console.log(body);
// });

// request.get({uri:"http://0.0.0.0:8080/nickname", json:true, body:{"user":"Joe"}}, function(error,response,body) {
//   console.log(body);
// });