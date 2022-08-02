let config = {};
config.db = {};

// create properties on the config.db object for the host and database names
const username = "friendsOnFilm"; // username for the MongoDB Atlas on cloud
const password = "28zNISEpypTMU4rR"; // password for the MongoDB on cloud
const dbname = "photos"; // name of the database that we want to connect to
const connectionURL = `mongodb+srv://${username}:${password}@cluster0.hvoan.mongodb.net/?retryWrites=true&w=majority`;
// create properties on the config.db object for the host and database names
config.db.host = connectionURL;
config.db.name = dbname;

module.exports = config;