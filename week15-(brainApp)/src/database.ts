import  mongoose, { model,  Schema} from 'mongoose';

const userSchema = new Schema({
    username : {
        type : String,
        unique : true,
    },
    password : String
})

export const userModel = model('users',userSchema)

const contentSchmea = new Schema({
    title : String,
    link : String,
    tags : [{type : mongoose.Types.ObjectId , ref : 'Tag'}],
    userId : {type : mongoose.Types.ObjectId , ref : 'users'}   //this ref defines (users) user Model
})

export const contentModel = mongoose.model('contacts',contentSchmea);