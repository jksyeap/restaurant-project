var request = require('request');
request = request.defaults({jar:true});

console.log("Starting my web requests:");

let midstring = "Testing cookies, \"/\" path, I sent: {";
let leftstring = "Testing cookies, \"/left\" path, I sent: {";
let rightstring = "Testing cookies, \"/right\" path, I sent: {";

console.log(midstring + request.get('http://0.0.0.0:8080').headers['cookie'] + "}");
console.log(leftstring + request.get('http://0.0.0.0:8080/left').headers['cookie'] + "}");
console.log(rightstring + request.get('http://0.0.0.0:8080/right').headers['cookie'] + "}");

// let good1 = request.get('http://0.0.0.0:8080', function() {
//   console.log(leftstring + request.get('http://0.0.0.0:8080/left').headers['cookie'] + "}");
//   console.log(rightstring + request.get('http://0.0.0.0:8080/right').headers['cookie'] + "}");
//   console.log(midstring + request.get('http://0.0.0.0:8080').headers['cookie'] + "}");
// }).headers['cookie'];
// console.log(midstring + good1 + "}");
