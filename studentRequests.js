/* Starter file for practicing HTTP requests */

const request = require('request');

function lookAtResponse(response) {
    console.log(`Status: ${response.statusMessage}`);
    console.log(`Status code: ${response.statusCode}`);
    console.log(`request: ${JSON.stringify(response.request)}`);
    console.log(`HTTP version: ${response.httpVersion}`);
    //console.log(`headers: ${JSON.stringify(response.headers)}`);
    console.log(`trailers: ${JSON.stringify(response.trailers)}`);
    for(let header in response.headers)
      console.log(header + " = " + response.headers[header]);
    
}

function lookAtBody(body) {
    console.log('body size:', body.length); 
}

// Example request...
request.get("http://www.grotto-networking.com/patents.html",
    function(error, response, body){
    if (error) {
        console.log('error:', error);
        return;
    };
    lookAtResponse(response);
    lookAtBody(body);
    console.log("\n\n\n");
});

request.get("http://www.grotto-networking.com/hiClass.html",
    function(error, response, body){
    if (error) {
        console.log('error:', error);
        return;
    };
    lookAtResponse(response);
    lookAtBody(body);
    console.log("\n\n\n");
});

request.get("http://www.grotto-networking.com:44/patents.html",
    function(error, response, body){
    if (error) {
        console.log('error:', error);
        return;
    };
    lookAtResponse(response);
    lookAtBody(body);
    console.log("\n\n\n");
});

var options = {
    url:"http://www.grotto-networking.com:44/patents.html",
    timeout:2000
}

request.get(options,
    function(error, response, body){
    if (error) {
        console.log('error:', error);
        return;
    };
    lookAtResponse(response);
    lookAtBody(body);
    console.log("\n\n\n");
});

request.get("https://windsurf.grotto-networking.com/data/logs/windEvents2018.json",
    function(error, response, body){
    if (error) {
        console.log('error:', error);
        return;
    };
    lookAtResponse(response);
    lookAtBody(body);
    console.log(JSON.parse(body)[35]);
    console.log("\n\n\n");
});
