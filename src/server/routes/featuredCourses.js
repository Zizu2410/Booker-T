const express= require('express')
const { db } = require('../models/FeaturedCourses')

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

router.get(':featuredcoursesId',async (req,res)=>{
    try{
        const courses = await db.collection('PureTopCourses').findById(req.params.featuredcoursesId)
        res.json(courses)
    }catch(err){
        res.json({message:err})
    }
})

module.exports=router