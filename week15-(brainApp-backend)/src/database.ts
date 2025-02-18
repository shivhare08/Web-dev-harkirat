import  mongoose, { model,  Schema} from 'mongoose';

const userSchema = new Schema({
    username : {
        type : String,
        unique : true,
    },
    password : String
})

export const userModel = model('users',userSchema)

const contentSchema = new Schema({
    title : String,
    link : String,
    tags : [{type : mongoose.Types.ObjectId , ref : 'Tag'}],
    userId : {type : mongoose.Types.ObjectId , ref : 'users'}   //this ref defines (users) user Model
})

export const contentModel = mongoose.model('contents',contentSchema);

const linkSchema = new Schema({
    hash : {type: String , required : true},
    userId : {type: mongoose.Types.ObjectId , unique : true , ref:'users' , required : true}
})

export const linkModel = mongoose.model('links',linkSchema);