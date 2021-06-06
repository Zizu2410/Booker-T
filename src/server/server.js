const express=require('express')
const  mongoose = require('mongoose')
const app=express()
const bodyParser = require('body-parser')
const {db}=require('./topCourses')
var ObjectId = require('mongodb').ObjectID;
const topCourses = require('./topCourses')
PORT = 3001
require('dotenv').config()

//for parsing the data that we get
app.use(bodyParser.json())

//Import Routes
const featuredCoursesRoute = require('./routes/featuredCourses')

app.use('/featuredcourses',featuredCoursesRoute)

//connect to mongodb

const url = process.env.CONNECTION_URL

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

app.listen(PORT, console.log(`Server is Starting at ${PORT}`))
