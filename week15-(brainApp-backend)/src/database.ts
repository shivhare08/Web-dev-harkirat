import  mongoose, { model,  Schema} from 'mongoose';

const userSchema = new Schema({
    username : {
        type : String,
        unique : true,
    },
    password : String
})

const userModel = model('users',userSchema)
export default userModel;

const contentSchema = new Schema({
    title : String,
    link : String,
    type : String,
    // tags : [{type : mongoose.Types.ObjectId , ref : 'Tag'}],
    userId : {type : mongoose.Types.ObjectId , ref : 'users'}   //this ref defines (users) user Model
})

export const contentModel = mongoose.model('contents',contentSchema);

const linkSchema = new Schema({
    hash : {type: String , required : true},
    userId : {type: mongoose.Types.ObjectId , unique : true , ref:'users' , required : true}
})

export const linkModel = mongoose.model('links',linkSchema);