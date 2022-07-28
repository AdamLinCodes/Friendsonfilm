const express = require('express');
const app = express();
const port = 8000;
const file = require("fs"); // import the fs (file system) module so that we read and write data to files
const exec = require('child_process').exec;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});

app.post('/facecheck', (request, response) => {
  let data = "";

  request.on('data', chunk => {
    data += chunk.toString();
  });

  request.on('end', () => {
    file.writeFile("./FacialRecog/user.jpg", data, 'base64', (err) => {
      if(err) {
        response.writeHead(500, { 'Content-Type': 'text/html'});
        response.end();
        return;
      }
    });

    const os = new os_func();

    os.execCommand('cd FacialRecog && python face_rec.py', () => {

      const responseData = file.readFileSync('./FacialRecog/scanResult.txt').toString();

      response.setHeader('Access-Control-Allow-Origin','*');
      response.writeHead(200, { "Content-Type": "text/plain"});
      response.end(responseData);

      console.log('Scan results: ' + responseData);
    });
  });
});

function os_func() {
  this.execCommand = function(cmd, callback) {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
          console.error(`exec error: ${error}`);
          return;
      }
      callback(stdout);
    });
  }
}