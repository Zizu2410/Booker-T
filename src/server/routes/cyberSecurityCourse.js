const express= require('express')
const { db } = require('../models/cloudCourses')
const app=express()

const router = express.Router()
const Course = require('../models/cyberSecurityCourses')

router.get('/',async (req,res)=>{
    try{
        const courses= await db.collection('CyberSecurityCourses').findOne()
        res.json(courses)
    }catch(err){
        res.json({message:err})
    }
})

module.exports=router