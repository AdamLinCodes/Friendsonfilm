const express = require('express');
const app = express();
const port = 8000;
const file = require("fs");
const { json } = require('stream/consumers');
const exec = require('child_process').exec;
const mc = require("mongodb").MongoClient;
const config = require("./config.js");

let photosDb;

//routes/endpoints
app.get('/retrievePhotos', getPhotos);

app.post('/facecheck', facecheckAuthentication);

app.post('/SignedUp', signUp);
let UsersCollection;
//is running the server
mc.connect(config.db.host, function(err, client) {
  if(err) throw err;
	console.log(`We have successfully connected to the ${config.db.name} database.`);

	photosDb = client.db(config.db.name);
  //add an collection validator
  UsersCollection = photosDb.collection("UsersCollection");
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});

//these are the functions that are called depending on the which endpoint is called
async function getPhotos(request, response) {
  let photosCollection = photosDb.collection("photos collection");
  let base64Strings = [];
  await photosCollection.find({}).forEach(data => {
    base64Strings.push(data['imgBase64']);
  });

  response.setHeader('Access-Control-Allow-Origin','*');
  response.writeHead(200, { "Content-Type": "text/plain"});
  response.end(JSON.stringify(base64Strings));
}

function facecheckAuthentication(request, response) {
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
}

async function signUp(request, response) {

  let data = "";
  request.on('data', chunk => {
    data += chunk.toString();
  });




  request.on('end', async () => {
    data=JSON.parse(data);
    console.log(data);
    const info = await UsersCollection.count({ $or:[ {'email':data. email}, {'username':data. username}, {'password':data. password}]});
    console.log("-----------");
    console.log(info)
    if(info ===0){
      UsersCollection.insertOne( { email: data. email, username:data. username,password:data. password } )
    }
    response.setHeader('Access-Control-Allow-Origin','*');
    response.writeHead(200, { "Content-Type": "text/plain"});
    response.end('The request worked! - BigSully ;)');
  });
}

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
