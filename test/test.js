const request = require('request');

// request.put({uri:"http://127.3.2.1:80/register", json:true, body:{"name":"Owen", "nickname":"Vanilla", "password":"node"}}, function(error,response,body) {
//   console.log(body);
// });

// request.put({uri:"http://127.3.2.1:80/register", json:true, body:{"name":"Steve", "nickname":"Outback", "password":"express"}}, function(error,response,body) {
//   console.log(body);
// });

// request.put({uri:"http://127.3.2.1:80/register", json:true, body:{"name":"Pack", "nickname":"Half-Pint", "password":"request"}}, function(error,response,body) {
//   console.log(body);
// });

// request.put({uri:"http://127.3.2.1:80/register", json:true, body:{"name":"Danny", "nickname":"Doughboy", "password":"json"}}, function(error,response,body) {
//   console.log(body);
// });

// request.put({uri:"http://127.3.2.1:80/register", json:true, body:{"name":"Karen", "nickname":"Six Feet", "password":"metalsmith"}}, function(error,response,body) {
//   console.log(body);
// });

// request.get({uri:"http://127.3.2.1:80/allUsers", json:true, body:{"Rname":"Owen", "Rpassword":"node"}}, function(error,response,body) {
//   console.log(body);
// });

/* valid nickname request with user name in database */
request.get({uri:"http://127.3.2.1:80/nickname", json:true, body:{"Rname":"Owen","Rpassword":"node","user":"Karen"}}, function(error,response,body) {
  console.log(body);
});

/* valid nickname request with user name not in database */
request.get({uri:"http://127.3.2.1:80/nickname", json:true, body:{"Rname":"Pack","Rpassword":"request","user":"Joe"}}, function(error,response,body) {
  console.log(body);
});

/* invalid nickname request with incorrect password */
request.get({uri:"http://127.3.2.1:80/nickname", json:true, body:{"Rname":"Steve","Rpassword":"asdf","user":"Owen"}}, function(error,response,body) {
  console.log(body);
});