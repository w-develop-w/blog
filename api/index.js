// This line imports the Express.js framework, making it available for use in your code.
const express = require('express');

const cors = require('cors');

//  This initializes an instance of the Express application. You'll use this instance to define routes, middleware, and other
//  settings for your server.
const app = express();

const User = require('./models/User')

//  This line imports the 'cors' module into your application. The 'cors' string is a package name that corresponds to the 
// "Cross-Origin Resource Sharing" middleware in Express.js. CORS is a security feature implemented by web browsers that restricts
//  web pages from making requests to a different domain than the one that served the web page.
app.use(cors());

// This line adds middleware to your Express application that parses incoming JSON payloads. When your server receives a request 
// with a JSON payload, this middleware will parse the JSON data and make it available in the req.body object for further processing. 
app.use(express.json());

mongoose.connect('mongodb+srv://blog:7awq9Z2qgVTScZ35@cluster0.urykbbc.mongodb.net/')

//  This code sets up a route for handling HTTP POST requests to the '/register' endpoint. When a POST request is made to this 
//  endpoint, the callback function (req, res) => { ... } is executed. Inside this callback, you're sending a JSON response of 
//  'test ok' back to the client.
app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    // In the /register route, after parsing the incoming JSON payload and extracting the username and password, this line responds 
    // to the client with a JSON object containing the extracted data. 
    
    const userDoc = await User.create({username, password});

    res.json(userDoc);
    // res.json({requestData: {username, password}});
});

// This line starts the Express server and makes it listen on port 4000. When the server starts successfully, the provided callback 
// function is executed, which logs a message to the console indicating that the server is listening.
app.listen(4000, () => {
    console.log('Server is listening on port 4000');
});
