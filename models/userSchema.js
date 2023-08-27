const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true , trim:true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone :{type:Number , required:true} ,
  age : {type:String , required:true},
  birthDate : {type:String},
  country :{type:String, required:true},
  state :{type:String, required:true},
  city :{type:String, required:true},
  createdAt: {
    type: Date, // Using the Date type for the field
    default: Date.now, // Set a default value to the current date and time
    required: true
  },  // Add more fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;