const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId


const StudentSchema = new Schema({
    email:{
        type:String,
        unique : true,
        required: true
    },

    password :{
        type : String
    },

    course : {
        type : String,
        required:true,
    }
})

const courseSchema = new Schema({
    mca:{
        type : String,
        required : true,
    },

    bca:{
        type : String,
        required : true,
    },

    btech:{
        type : String,
        required : true,
    },

    studentId : ObjectId
})

//models
const studentModel = mongoose.model("student",StudentSchema);
const courseModel = mongoose.model("courses",courseSchema);

module.exports ={
    studentModel : studentModel,
    courseModel : courseModel
}

