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
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','*')
    next()
})

//Import Routes
const featuredCoursesRoute = require('./routes/featuredCourse')
const programmingCoursesRoute = require('./routes/programmingCourse')

app.use('/featuredcourses',featuredCoursesRoute)
app.use('/programmingcourses',programmingCoursesRoute)

//connect to mongodb

const url = process.env.CONNECTION_URL

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

app.listen(PORT, console.log(`Server is Starting at ${PORT}`))
