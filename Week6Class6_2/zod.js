const zod = require("zod")

const signupSchema = zod.object({
    username : zod
    .string({required_error:"name is required"})
    .trim()
    .min(3,{message : "Name must be atleast 3 chars"})
    .max(255,{message : "name mus be more than 3 char"})
},{
    email : zod
    .string({required_error:"emal is required"})
    .trim()
    .min(3,{message : "email must be atleast 3 chars"})
    .max(255,{message : "email mus be more than 3 char"})
},{
    phone : zod
    .string({required_error:"name is required"})
    .trim()
    .min(10,{message : "phone must be atleast 10 chars"})
    .max(10,{message : "phone must be more than 10 char"})
});

