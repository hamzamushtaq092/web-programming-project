import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from "bcrypt";
import { User } from './Models/UserSchema.js';
import   jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";


dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Database connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("DB Connected");
})
.catch((error) => {
  console.error("Error connecting to the database:", error);
});

// Signup route
app.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user with the given email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        console.log("User already registered")
      return res.status(400).json({ message: "User already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    // Save the new user to the database
    await newUser.save();

    console.log('User created successfully')
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user with the given email
    const user = await User.findOne({ email });

    if (!user) {
        console.log("User does not exist")
      return res.status(404).json({ message: "User does not exist" });
    }

    // Compare the hashed password with the provided password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
        console.log("login successfully")
      return res.status(200).json({ message: "Login successful", user });
    } else {
        console.log("Password not matched")
      return res.status(401).json({ message: "Password does not match" });
    }
  } catch (error) {
    console.error("Error finding user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

//Forget password
app.post('/forget', async (req, res) => {
  try {
    const {email} = req.body;

    // Check if user with the given email already exists
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
        console.log("User Does Not Exist")
      return res.status(200).json({ message: "User does not exist" });
    }

    const secret= JWT_SECRET + existingUser.password;
    const token= jwt.sign({email:existingUser.email,id:existingUser._id},secret,{expiresIn:'15m'});

    // --------------------------------------------------


///////////////////////////////////////////////////////////////////////////////////////////////////

    const link=`http://localhost:5173/reset-password/${existingUser._id}/${token}`;

    console.log("link",link)

    console.log("user Exist")
      return res.status(200).json({ message: "User Exist"});
  } 
  catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.get('/reset-password/:id/:token', async (req, res) => {
  const { id, token } = req.params;
  
  
  const existingUser = await User.findOne({ _id:id});
  if (!existingUser) {
      console.log("User Does Not Exist");
      return res.status(200).json({ message: "User does not exist" });
  }

  const secret = JWT_SECRET + existingUser.password;

  try {
      const verify = jwt.verify(token, secret);
      res.send('verified');
      console.log("link",link)
  } catch (error) {
      res.send('not verified');
  }

  console.log(req.params);
  // res.send('done');
});

app.post('/reset-password/:id/:token', async (req, res) => {
    const {id , token} = req.params;
    const { password } = req.body;  

    const existingUser = await User.findOne({ _id:id});

    if (!existingUser) {
        console.log("User Does Not Exist");
        return res.status(200).json({ message: "User does not exist" });
    }

    const secret = JWT_SECRET + existingUser.password;

    try {
        const verify = jwt.verify(token, secret);
        const hashedPassword = await bcrypt.hash(password, 10); 
        await User.updateOne(
            {_id:id}, 
            {
                $set: {
                    password: hashedPassword
                }
            }
        );
        res.json({ message: "Password reset successfully" })
    }
    catch (error) {
      res.json({ message: "Something went wrong" })
    }
 
});

// Start the server
app.listen(3000, () => {
  console.log("Server is Running");
});
