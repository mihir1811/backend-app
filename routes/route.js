const express = require('express')
const router = express.Router()
const controller = require("../controllers/controllers")

// Registration api
router.post('/auth/registration',controller.registerUser );

// Login endpoint
router.post('/auth/login', controller.loginUser );

// add post api

// get all users posts api

// get single posts

// get users api
module.exports =  router;