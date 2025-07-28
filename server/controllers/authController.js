
import User from '../models/Register.js'; 
import bcrypt from 'bcrypt'; // For password hashing

//  Register User
//router.post('/' ,async (req,res))
export async function registerUser(req, res) {
  try {
    console.log("Register user here " , req.body);
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
  
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ error: "Username already exists" });
    }
  
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
}

// router.post('/' ,async (req,res))
export async function validateUser(req, res) {
  try {
    const { username, password } = req.query;

     console.log("Login  validation here " , req.query);

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

     console.log("Login  validation here  1" );

    const isValid = await user.isValidPassword(password);
    if (!isValid) {
        console.log("Login  validation invalid password  3" );
      return res.status(401).json({ error: "Invalid password" });
    }
    console.log("Login  validation here  3" );

    res.status(200).json({ msg: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
}


/** DELETE: Remove user by query (e.g., ?username=raj) */
export async function deleteUser(req, res) {
  try {
    const { username } = req.query;
    if (!username) return res.status(400).json({ error: "Username query is required" });

    const deleted = await User.deleteOne({ username });
    if (deleted.deletedCount === 0) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    console.error('Deletion error:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}