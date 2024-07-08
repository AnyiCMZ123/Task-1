let http = require("http");

let handler = function(request, response){
    console.log('we receive a new request');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hello World</title>
            <style>
                .blue { color: blue; }
            </style>
        </head>
        <body>
            Hello World<br><span class="blue">:)</span>
        </body>
        </html>
    `);
};

let servidor = http.createServer(handler);

servidor.listen(8080);
