//Typical imports for a node server
const http = require("http"); 
const file = require("fs");
const url = require("url");

var students;

const host = "localhost";
const port = 8000;

const server = http.createServer(processRequest);

// Bind the port and host to the server
server.listen(port, host, () => { 
  console.log("Server is running!");
});

function processRequest(request, response) {

  if(request.method == "GET") {
    if(request.url === "/mainPage.html" || request.url === "/") {
      file.readFile('../Client/mainPage.html', 'utf8', function(err, contents) {
        if(err){
          response.writeHead(500, {"Content-Type": "text/html"});
          response.end();
          return;
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(contents);
      });
    }
    else if(request.url === "/catchPhoto.html") {
      file.readFile('../Client/catchPhoto.html', 'utf8', function(err, contents) {
        if(err){
          response.writeHead(500, {"Content-Type": "text/html"});
          response.end();
          return;
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(contents);
      });
    }
  }
}