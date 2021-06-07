const express= require('express')
const { db } = require('../models/dataScienceCourses')
const app=express()

const router = express.Router()
const Course = require('../models/dataScienceCourses')

router.get('/',async (req,res)=>{
    try{
        const courses= await db.collection('DataScienceCourse').findOne()
        res.json(courses)
    }catch(err){
        res.json({message:err})
    }
})

module.exports=router