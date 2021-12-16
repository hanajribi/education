const mongoose = require('mongoose');

//model ayant des attributs 
const courseSchema = mongoose.Schema({
    teacher: String,
    name: String,
    price: String,
    duration:String,
    description: String,
    img : String,
    userId :String
  
});
const Course = mongoose.model('Course',courseSchema);
//Course est un type créer par developer
module.exports = Course;
