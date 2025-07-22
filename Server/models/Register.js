import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email required"],
    trim: true,
    match: [
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Email address is invalid"
    ],
  },
  password: {
    type: String,
    required: [true, "Password required"],
    minlength: [6, "Password needs to be 6 characters or more"],
    trim: true,
  } 
  
});


/** Hash the password before saving */

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

/**  Method to validate password during login */
userSchema.methods.isValidPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};



const User = mongoose.model("users", userSchema);

export default User;
