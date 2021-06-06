const express=require('express')
const  mongoose = require('mongoose')
const app=express()
const bodyParser = require('body-parser')
var ObjectId = require('mongodb').ObjectID;
PORT = 5000
require('dotenv').config()
const cors=require('cors')
//for parsing the data that we get

app.use(bodyParser.json())
app.use(cors())

//Import Routes
const featuredCoursesRoute = require('./routes/featuredCourse')

app.use('/featuredcourses',featuredCoursesRoute)

//connect to mongodb

const url = process.env.CONNECTION_URL

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

app.listen(PORT, console.log(`Server is Starting at ${PORT}`))
