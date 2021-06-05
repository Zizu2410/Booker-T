const express=require('express')
const  mongoose = require('mongoose')
const app=express()
const {db}=require('./topCourses')
var ObjectId = require('mongodb').ObjectID;
const topCourses = require('./topCourses')
PORT = 3001

const CONNECTION_URL = "mongodb+srv://Zuzu:PowerBoi69@cluster0.u0m9u.mongodb.net/BookerT-Db?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

db.collection('PureTopCourses').findOne({}, function(err,topCourse){
    if(err){
        console.warn(err)
    }
    console.warn(topCourse)
})