import mongoose from "mongoose";

const registerSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const Register = mongoose.model('Register', registerSchema);

export default Register;
