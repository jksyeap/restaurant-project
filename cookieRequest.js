var request = require('request');
request = request.defaults({jar:true});

console.log("Starting my web requests:");

let midstring = "Testing cookies, \"/\" path, client sent: {";
let leftstring = "Testing cookies, \"/left\" path, client sent: {";
let rightstring = "Testing cookies, \"/right\" path, client sent: {";

// console.log(midstring + request.get('http://127.3.2.1:80').headers['cookie'] + "}");
// console.log(leftstring + request.get('http://127.3.2.1:80/left').headers['cookie'] + "}");
// console.log(rightstring + request.get('http://127.3.2.1:80/right').headers['cookie'] + "}");

let good1 = request.get('http://127.3.2.1:80', function() {
  console.log(leftstring + request.get('http://127.3.2.1:80/left').headers['cookie'] + "}");
  console.log(rightstring + request.get('http://127.3.2.1:80/right').headers['cookie'] + "}");
  console.log(midstring + request.get('http://127.3.2.1:80').headers['cookie'] + "}");
}).headers['cookie'];
console.log(midstring + good1 + "}");
