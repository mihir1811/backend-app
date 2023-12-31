const User = require("../models/userSchema")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken'); // for generate jwt token

// jwt secretkey
const secretKey = 'your-secret-keyyour-secret-keyyour-secret-key';



exports.registerUser = async (req, res) => {
    const { username, password , email ,phone, age ,birthDate ,country ,state , city  } = req.body;
  
    try {
      // Check if the user already exists in the database
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }
  
      // Hash the password before storing it in the database
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const user = new User({ username, password: hashedPassword , email :email  });
      await user.save();
  
      return res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      // Check if the user exists in the database
      console.log(req.body ,"---------------------------------------------[")
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      // Compare the provided password with the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
        // Create a JWT token with the user's information as payload
        const token = jwt.sign({ userId: user._id, username: user.username }, secretKey, {
          expiresIn: '1h', // Token expires in 1 hour (you can adjust this as needed)
        });
    
        return res.status(200).json({ token });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }