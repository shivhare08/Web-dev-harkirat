const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// const schemaa = new mongoose.Schema({

// })

//iinnn schema ki _id as a ObjectId , MOngoDB automatically bna deta h
const UserSchema = new Schema({
    email : {type :String , unique:true},
    password: String,
    name:String
})

const TodoSchema = new Schema({
    userId : ObjectId,       //ObjectId ka mtlb => iss particular document ki id uss obj me rkhi h
    title:String,
    done:Boolean
})


//yha pr "users" collection ya table ka name h n UserSchema jo ek object h wo humne iss collection ya table me daal dia
const UserModel = mongoose.model("users",UserSchema);
const TodoModel = mongoose.model("todos",TodoSchema);


module.exports = {
    UserModel : UserModel,
    TodoModel : TodoModel
}
