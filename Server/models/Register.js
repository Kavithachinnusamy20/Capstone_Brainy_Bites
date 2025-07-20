import mongoose from "mongoose";

const registerSchema =mongoose.Schema({
    name: String,
    email :String,
    password :String
})
const todo =mongoose.model('register',registerSchema)
export default registerSchema