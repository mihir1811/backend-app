const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 7070 || process.env.PORT 

const dbPassword = "qnga56NvxmnLqCLo"
const atlasDbUrl = `mongodb+srv://mihir1811:${dbPassword }@cluster0.dzrnfut.mongodb.net/?retryWrites=true&w=majority`

const local_db  = "mongodb://localhost:27017/social_media_app"

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());



// database connection
mongoose.connect(atlasDbUrl , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }).then((data)=>{
    console.log("database connection successful")
}).catch((err)=>{
    console.log(err)
})


app.listen(port ,() =>{
    console.log("we are live on " + port)
})