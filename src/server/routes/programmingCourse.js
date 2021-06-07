const express= require('express')
const { db } = require('../models/programmingCourses')
const app=express()

const router = express.Router()
const Course = require('../models/programmingCourses')

router.get('/',async (req,res)=>{
    try{
        const courses= await db.collection('ProrgammingCourses').findOne()
        res.json(courses)
    }catch(err){
        res.json({message:err})
    }
})

module.exports=router