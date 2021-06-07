const express= require('express')
const { db } = require('../models/excelCourses')
const app=express()

const router = express.Router()
const Course = require('../models/excelCourses')

router.get('/',async (req,res)=>{
    try{
        const courses= await db.collection('ExcelCourses').findOne()
        res.json(courses)
    }catch(err){
        res.json({message:err})
    }
})

module.exports=router