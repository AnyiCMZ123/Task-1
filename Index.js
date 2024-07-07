let http = require("http");

let handler = function(request, response){
    console.log("we receive a new request");
    response.end("Hello World \n :)");
};

let servidor = http.createServer(handler);

servidor.listen(8080);
