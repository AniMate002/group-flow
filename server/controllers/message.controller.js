import { Message } from "../models/message.model.js"
import { User } from "../models/user.model.js"


export const sendMessage = async (req, res) => {
    try {
        const teamId = req.params.teamId
        const { text, image } = req.body
        const userId = req.user._id
        if(!teamId) return res.status(400).json({error: "Team id is not provided."})
        
        // TODO: ADD TEAM ID VALIDATION
        const team = {_id: teamId}
        //

        if(!text && !image) return res.status(400).json({error: "Provide text or image."})

        const user = await User.findById(userId)
        if(!user) return res.status(404).json({error: "User nor found."})

        const newMessage = new Message({text, user: user._id, image, team: team._id})
        await newMessage.save()

        return res.status(202).json(newMessage)
        
    } catch (error) {
        console.log(" Error in sendMessageController: ", error.message)
        return res.status(500).json({error: "Error 500: can not sendMessage"})
    }
}

