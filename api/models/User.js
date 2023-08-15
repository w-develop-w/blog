// In this section, the mongoose library is imported, along with specific functionalities (Schema and model) from the library. 
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Defining the User Schema
// Here, a Mongoose schema named UserSchema is defined. The schema defines the structure of a user document in the MongoDB collection.
// It has two fields: username and password. The properties inside each field's object specify the data type (String) and certain
// validation rules for the fields:
const UserSchema = new Schema({
    username: {type: String, require: true, min: 4, unique: true}, 
    password: {type: String, require: true}, 
});

// Creating the User Model
// Using the model function, a Mongoose model named UserModel is created based on the defined UserSchema. The model provides an 
// interface for interacting with the MongoDB collection named 'users'. The first argument to the model function is the name of the 
// collection (in this case, 'User'), and the second argument is the schema (UserSchema) to use for defining the structure of the 
// documents in the collection.
const UserModel = model('User', UserSchema)

// Exporting the Model
module.exports = UserModel;