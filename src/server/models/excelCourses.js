const mongoose = require('mongoose')

const ExcelCourseSchema = mongoose.Schema({
    c_id:String,
    c_name:String,
    c_image:String,
    c_description:String,
    c_price:String,
    c_slug:String,
})

module.exports= mongoose.model('ExcelCourses',ExcelCourseSchema)