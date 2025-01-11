import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"

export const protectRoute = async (req, res, next) => {
    try{
        const token = req.cookies.jwt
        console.log("TOKEN:", token)
        if(!token) return res.status(400).json({error: "Unauthorized: No token provided."})

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log("DECODED:", decoded)
        if(!decoded) return res.status(400).json({error: "Unauthorized: Invalid token."})

        const userId = decoded.userId
        console.log("USER ID:", userId)
        const user = await User.findById(userId)
        if(!user) return res.status(404).json({error: "User not found."})

        console.log("Protection Route passed.")
        req.user = user
        next()
    }catch(error){
        console.log(" Error in protectRoute: ", error.message)
        return res.status(500).json({error: "Error 500: can not check protection."})
    }
}