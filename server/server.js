const express = require('express');
const app = express();
const port = 8000;
const file = require("fs");
const exec = require('child_process').exec;
const mongoClient = require("mongodb").MongoClient;
const config = require("./config.js");

var photosDb;

//routes
app.get('/getPhotos', findAllPhotos);

app.post('/scanFace', authenticateFace);

app.post('/addCredentials', insertCredentials);

app.post('/checkCredentialsExist', credentialsExist);


//is running the server
mongoClient.connect(config.db.host, function(err, client) {
  if(err) throw err;
	console.log(`We have successfully connected to the ${config.db.name} database.`);

	photosDb = client.db(config.db.name);

  app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
  });
});


//endpoints functions
async function findAllPhotos(request, response) {
  const photosCollection = photosDb.collection("photos collection");
  let base64Strings = [];
  await photosCollection.find({}).forEach(data => {
    base64Strings.push(data['imgBase64']);
  });

  response.setHeader('Access-Control-Allow-Origin','*');
  response.writeHead(200, { "Content-Type": "text/plain"});
  response.end(JSON.stringify(base64Strings));
}

function authenticateFace(request, response) {
  let data = "";

  request.on('data', chunk => {
    data += chunk.toString();
  });

  request.on('end', () => {
    file.writeFile("./FacialRecog/user/user.jpg", data, 'base64', (err) => {
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

async function insertCredentials(request, response) {

  let data = '';
  request.on('data', chunk => {
    data += chunk.toString();
  });

  request.on('end', async () => {
    const credentialsDocument = JSON.parse(data);    
    const usersCollection = photosDb.collection("users collection");
    const existingCredentials = [];

    await usersCollection.find({ $or:[ 
      {'email': credentialsDocument['email']},
      {'username': credentialsDocument['username']},
      {'password': credentialsDocument['password']}
    ]}).forEach(data => {
      existingCredentials.push(data);
    });;

    let responseObject = {
      emailExists: false,
      usernameExists: false,
      passwordExists: false
    };

    if (existingCredentials.length !== 0) {
      if (existingCredentials[0]['email'] === credentialsDocument['email']) {
        responseObject['emailExists'] = true;
      } 
      if (existingCredentials[0]['username'] === credentialsDocument['username']) {
        responseObject['usernameExists'] = true;
      } 
      if (existingCredentials[0]['password'] === credentialsDocument['password']) {
        responseObject['passwordExists'] = true;
      } 
    }
    
    if (checkResponseObject(responseObject)) {
      await usersCollection.insertOne(credentialsDocument);
    }

    response.setHeader('Access-Control-Allow-Origin','*');
    response.writeHead(200, { "Content-Type": "text/plain"});
    response.end(JSON.stringify(responseObject));
  });
}

async function credentialsExist(request, response) {
  let data = '';
  request.on('data', chunk => {
    data += chunk.toString();
  });

  request.on('end', async () => {
    const credentialsDocument = JSON.parse(data);    
    const usersCollection = photosDb.collection("users collection");

    const userDocument = await usersCollection.findOne({
      'username': credentialsDocument['username'],
      'password': credentialsDocument['password']
    });

    response.setHeader('Access-Control-Allow-Origin','*');
    response.writeHead(200, { "Content-Type": "text/plain"});

    if (userDocument !== undefined && userDocument !== null) {
      response.end(JSON.stringify(true));
    } else {
      response.end(JSON.stringify(false));
    }
  });
}


// helper functions
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

function checkResponseObject(responseObject) {
  return !responseObject['emailExists'] && !responseObject['usernameExists'] && !responseObject['passwordExists'];
}