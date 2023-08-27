const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 7070 || process.env.PORT 

// db creds
const dbPassword = "qnga56NvxmnLqCLo"
const atlasDbUrl = `mongodb+srv://mihir1811:${dbPassword }@cluster0.dzrnfut.mongodb.net/?retryWrites=true&w=majority`
// const local_db  = "mongodb://localhost:27017/social_media_app"
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // If you need to send cookies with the request
}));

// database connection
mongoose.connect(atlasDbUrl).then((data)=>{
    console.log("database connection successful")
}).catch((err)=>{
    console.log(err)
})

// for touting
app.use(require("./routes/route"))


app.get("/testing" , (req , res) =>{
  try {
    res.send("testing purpose")
  } catch (error) {
    console.log(error)
  }
})

app.listen(port ,() =>{
    console.log("we are live on " + port)
})