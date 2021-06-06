const express= require('express')

const router = express.Router()
const course = require('../models/FeaturedCourses')

router.get('/', (req,res)=>{
    res.send('ok')
})

module.exports=router