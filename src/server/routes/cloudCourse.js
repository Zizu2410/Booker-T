const express= require('express')
const { db } = require('../models/cloudCourses')
const app=express()

const router = express.Router()
const Course = require('../models/cloudCourses')

router.get('/',async (req,res)=>{
    try{
        const courses= await db.collection('CloudCourses').findOne()
        res.json(courses)
    }catch(err){
        res.json({message:err})
    }
})

module.exports=router