const http = require("http"); // import the http module, so that we can create a web server
const file = require("fs"); // import the fs (file system) module so that we read and write data to files
const url = require("url"); // import the url module so we can parse the web address of the request into readable parts

var students;

const host = "localhost"; // address of the server; localhost means that the server is referring to itself and is not accessible from the internet
const port = 8000; // port most commonly used by webservers

const server = http.createServer(processRequest); // create the server object

server.listen(port, host, () => { // Bind the port and host to the server
  console.log("Server is running!");
});

// process a request received, prepare and send a response back to the client
function processRequest(request, response) {
  let urlObject = url.parse(request.url, true); // parses the URL into readable parts

  if(request.method == "GET"){
    if(request.url == "/user-exists") {

      response.writeHead(200, { "Content-Type": "text/html"});
      response.end("User exists!");
    }
    if(request.url === "/index.html"){
      file.readFile('index.html', 'utf-8', function(err, contents) {
        if(err) {
          response.writeHead(500, { "Content-Type": "text/html"});
          response.end();
          return;
        }
        response.writeHead(200, { "Content-Type": "text/html"});
        response.end(contents);
      });
    }
    if(request.url === "/testing") {
      response.setHeader('Access-Control-Allow-Origin','*');
      response.writeHead(200, { "Content-Type": "text/plain"});
      response.end('It made it baby!!!');
    }
  }
  if (request.method === "POST") {
    if(request.url === "/facecheck") {
      let data = "";
      request.on('data', chunk => {
          data += chunk.toString();

      });
      request.on('end', () => {
        file.writeFile('user.jpg', data, err => {
          if(err) {
            response.writeHead(500, { "Content-Type": "text/html"});
            response.end();
            return;
          }
        });
        response.setHeader('Access-Control-Allow-Origin','*');
        response.writeHead(200, { "Content-Type": "text/plain"});
        response.end('Adam');
      });
    }
  }
}

