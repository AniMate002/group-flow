import { User } from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/token.js"
import bcrypt from "bcryptjs"


export const signUp = async (req, res) => {
    try {
        const { username, fullname, email, password } = req.body

        if( password.length < 6 ) return res.status(400).json({error: "Password can not be less than 6 characters."})
        if(!username || !fullname || !email || !password) return res.status(400).json({error: "Fields can not be empty."})

        let foundUser = await User.findOne({username})
        if(foundUser) return res.status(400).json({error: "User with this 'username' already exists."})
        
        foundUser = await User.findOne({email})
        if(foundUser) return res.status(400).json({error: "This email is already taked."})

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({username, fullname, email, password: hashedPassword})
        await newUser.save()

        generateTokenAndSetCookie(newUser._id, res)

        return res.status(201).json({newUser})

    } catch (error) {
        console.log(" Error in signUpController: ", error.message)
        return res.status(500).json({error: "Error 500: can not signUp"})
    }
}



export const logIn = async (req, res) => {
    try {
        const { password, username } = req.body
        
        const foundUser = await User.findOne({username})
        if(!foundUser) return res.status(404).json({error: "User with this 'username' was not found."})

        const matchPasswords = await bcrypt.compare(password, foundUser.password)
        if(!matchPasswords) return res.status(400).json({error: "Passwords do not match."})

        generateTokenAndSetCookie(foundUser._id, res)

        return res.status(200).json(foundUser)

    } catch (error) {
        console.log(" Error in logInController: ", error.message)
        return res.status(500).json({error: "Error 500: can not logIn"})
    }
}



export const logOut = async (req, res) => {
    try {
        res.cookie("jwt", '', {maxAge: 0})
        return res.status(200).json({message: "Logout successfully."})
    } catch (error) {
        console.log(" Error in logOutController: ", error.message)
        return res.status(500).json({error: "Error 500: can not logOut"})
    }
}


export const getMe = async (req, res) => {
    try {
        const userId = req.user._id
        const foundUser = await User.findById(userId)
        if(!foundUser) return res.status(404).json({error: "User not found."})
        return res.status(200).json(foundUser)
    } catch (error) {
        console.log(" Error in meController: ", error.message)
        return res.status(500).json({error: "Error 500: can not getMe"})
    }
}