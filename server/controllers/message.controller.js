import { Message } from "../models/message.model.js"
import { Team } from "../models/team.model.js"
import { User } from "../models/user.model.js"


export const sendMessage = async (req, res) => {
    try {
        const teamId = req.params.teamId
        const { text, image } = req.body
        const userId = req.user._id
        if(!teamId) return res.status(400).json({error: "Team id is not provided."})
        
        const team = await Team.findById(teamId)
        if(!team) return res.status(404).json({error: "Team not found."})

        if(!text && !image) return res.status(400).json({error: "Provide text or image."})

        const user = await User.findById(userId)
        if(!user) return res.status(404).json({error: "User nor found."})

        const newMessage = new Message({text, user: user._id, image, team: team._id})

        await Promise.all([
            newMessage.save(),
            Team.findByIdAndUpdate(teamId, { $push: { messages: newMessage }})
        ])

        // TODO: if image was sent, add image link to team.images field
        return res.status(202).json(newMessage)
        
    } catch (error) {
        console.log(" Error in sendMessageController: ", error.message)
        return res.status(500).json({error: "Error 500: can not sendMessage"})
    }
}

