// import express from "express";
// import bcrypt from "bcrypt";

// const router = express.Router();

// import {User} from '../Models/UserSchema.js'

// router.post("/signup",  async (req, res) => {

//     const { username, email, password } = req.body;
//     const user =User.find({ email });

//     if (user){
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = ({
//         username,
//         email,
//         password: hashedPassword,
    
//     })
//     await newUser.save()
//     return res.json({ message: "User created successfully" });
// })

// export{router as userRouter}