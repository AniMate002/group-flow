import { User } from "../models/user.model.js"


export const getAllUsers = async (req, res) => {
    try{
        const allUsers = await User.find()
        return res.status(200).json(allUsers)
    }catch(e){
        console.log("Error 500: can not get users - ", e.message)
        return res.status(500).json({error: "Error in getAllUsersController"})
    }
}