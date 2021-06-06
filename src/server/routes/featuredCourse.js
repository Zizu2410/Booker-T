const express= require('express')
const { db } = require('../models/FeaturedCourses')
const app=express()

const router = express.Router()
const Course = require('../models/FeaturedCourses')

router.get('/',async (req,res)=>{
    try{
        const courses= await db.collection('PureTopCourses').findOne()
        res.json(courses)
    }catch(err){
        res.json({message:err})
    }
})

module.exports=router