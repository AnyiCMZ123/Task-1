var http = require("http");

var handler = function(request,response){
    console.log("we receive a new request");
    response.end("Hello World");
};

var servidor = http.createServer(handler);

servidor.listen(8080);
