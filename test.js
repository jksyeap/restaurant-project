const request = require('request');

request.put("http://0.0.0.0:8080/register", {form : {"name":"Owen", "nickname":"Vanilla"}}, function(error,response,body) {
  console.log(body);
})

request.put("http://0.0.0.0:8080/register", {form : {"name":"Steve", "nickname":"Outback"}}, function(error,response,body) {
  console.log(body);
})

request.put("http://0.0.0.0:8080/register", {form : {"name":"Pack", "nickname":"Half-Pint"}}, function(error,response,body) {
  console.log(body);
})

request.put("http://0.0.0.0:8080/register", {form : {"name":"Danny", "nickname":"Doughboy"}}, function(error,response,body) {
  console.log(body);
})

request.put("http://0.0.0.0:8080/register", {form : {"name":"Karen", "nickname":"Six Feet"}}, function(error,response,body) {
  console.log(body);
})