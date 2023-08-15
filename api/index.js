// This line imports the Express.js framework, making it available for use in your code.
const express = require('express');

// cors is a middleware package in Node.js used to handle Cross-Origin Resource Sharing (CORS) in web applications. CORS is a 
// security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that 
// served the web page
const cors = require('cors');

//  This initializes an instance of the Express application. You'll use this instance to define routes, middleware, and other
//  settings for your server.
const app = express();

//  is importing the User model from a module located in the ./models/User.js
const User = require('./models/User')

//  This line imports the 'cors' module into your application. The 'cors' string is a package name that corresponds to the 
// "Cross-Origin Resource Sharing" middleware in Express.js. CORS is a security feature implemented by web browsers that restricts
//  web pages from making requests to a different domain than the one that served the web page.
app.use(cors());

// This line adds middleware to your Express application that parses incoming JSON payloads. When your server receives a request 
// with a JSON payload, this middleware will parse the JSON data and make it available in the req.body object for further processing. 
app.use(express.json());

// is establishing a connection to a MongoDB database using the Mongoose library.
mongoose.connect('mongodb+srv://blog:7awq9Z2qgVTScZ35@cluster0.urykbbc.mongodb.net/')

// The route is defined using app.post('/register', ...) which sets up the HTTP POST route at the /register URL path.
// The callback function is defined with (req, res) => { ... }, where req is the request object representing the incoming HTTP 
// request, and res is the response object representing the outgoing HTTP response.
app.post('/register', async (req, res) => {
    // The callback function extracts the username and password fields from the request body using object destructuring.
    //  The req.body object contains the parsed JSON data from the incoming request.
    const {username, password} = req.body; 
    
    try {
        // Inside a try block, the code attempts to create a new user document in the MongoDB database using the User.create() method.
        // This method is likely provided by the User model you imported earlier. The create() method creates a new user record in the
        // database with the provided username and password.
        const userDoc = await User.create({username, password});
        // If the user creation is successful, the code responds to the client with a JSON object containing the created user document
        // by calling res.json(userDoc).
        res.json(userDoc);
    } catch {
        // If an error occurs during the user creation (for example, due to validation errors or database connectivity issues), the code
        //  catches the error in the catch block. It then responds to the client with a 400 status code (Bad Request) and sends the error
        //  object as a JSON response using res.status(400).json(e).
        res.status(400).json(e);
    }

    // res.json({requestData: {username, password}});
});

// This line starts the Express server and makes it listen on port 4000. When the server starts successfully, the provided callback 
// function is executed, which logs a message to the console indicating that the server is listening.
app.listen(4000, () => {
    console.log('Server is listening on port 4000');
});
