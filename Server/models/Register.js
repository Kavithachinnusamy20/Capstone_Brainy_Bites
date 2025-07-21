import mongoose from "mongoose";

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
  },
  password2: {
    type: String,
    required: [true, "Confirm password is required"],
    trim: true,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Passwords do not match",
    },
  },
});

const User = mongoose.model("User", userSchema);

export default User;
