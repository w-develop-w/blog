// This line imports the Express.js framework, making it available for use in your code.
const express = require('express');

const cors = require('cors');

//  This initializes an instance of the Express application. You'll use this instance to define routes, middleware, and other
//  settings for your server.
const app = express();

app.use(cors());

//  This code sets up a route for handling HTTP POST requests to the '/register' endpoint. When a POST request is made to this 
//  endpoint, the callback function (req, res) => { ... } is executed. Inside this callback, you're sending a JSON response of 
//  'test ok' back to the client.
app.post('/register', (req, res) => {
    res.json('test ok');
});

// This line starts the Express server and makes it listen on port 4000. When the server starts successfully, the provided callback 
// function is executed, which logs a message to the console indicating that the server is listening.
app.listen(4000, () => {
    console.log('Server is listening on port 4000');
});
