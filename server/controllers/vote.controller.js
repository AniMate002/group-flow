import { User } from "../models/user.model.js"
import { Vote } from "../models/vote.model.js"



export const createVote = async (req, res) => {
    try {
        const teamId = req.params.teamId
        const userId = req.user._id
        const { title, description, options } = req.body

        if(!teamId) return res.status(400).json({error: "Invalid teamId."})
        
        const user = await User.findById(userId)
        if(!user) return res.status(404).json({error: "Not found user."})

            // DEBUGGING
            console.log("--------------------DEBUGGING Createvote")
        console.log("Title: ", title)
        console.log("Description: ", description)
        console.log("Options: ", options)
        // 

        if(!title || !options || options?.length === 0) return res.status(400).json({error: "Title and options can not be empty."})

        // TODO: CHECK teamId VALIDITY
        const team = { _id: teamId}
        // 

        for(let option of options){
            if(option.text === undefined) return res.status(400).json({error: "Vote option can not be empty."})
        }

        const newVote = new Vote({title, description, options, user: user._id, team: team._id})
        await newVote.save()

        return res.status(201).json(newVote)


    } catch (error) {
        console.log(" Error in createVoteController: ", error.message)
        return res.status(500).json({error: "Error 500: can not createVote."})
    }
}


export const castVote = async (req, res) => {
    try {
        const voteId = req.params.voteId
        const userId = req.user._id
        const { optionId } = req.body

        // CHECK VOTE EXISTENCE IN DB
        const vote = await Vote.findById(voteId)
        if(!vote) return res.status(404).json({error: "Vote not found"})

        // CHECK USER EXISTENCE IN DB
        const user = await User.findById(userId)
        if(!user) return res.status(404).json({error: "User not found"})

        // CHECK OPTION ID PRESENCE
        if(!optionId) return res.status(404).json({error: "No option provided"})

        // SEARCH FOR THE OPTION WE WANT TO CAST VOTE FOR
        const option = vote.options.find(option => option._id.toString() === optionId)
        if(!option) return res.status(404).json({error: "Ivalid option"})

        // CHECKING IF VOTE HAS ALREADY BEEN CASTED 
        const alreadyCasted = option.voters.includes(user._id.toString());
        if(alreadyCasted){
            // REMOVING OUR ID
            option.voters = option.voters.filter(voter => voter.toString() !== user._id.toString())
            // SAVING UPDATED VOTE WITH PUSHED OPTION.VOTERS
            await vote.save()
            return res.status(200).json({ message: "Vote removed", vote });
        }else{
            // ADDING OUR ID
            option.voters.push(userId)
            // SAVING UPDATED VOTE WITH PUSHED OPTION.VOTERS
            await vote.save();
            return res.status(201).json({ message: "Vote casted successfully", vote });
        }

        
    } catch (error) {
        console.log(" Error in castVoteController: ", error.message)
        return res.status(500).json({error: "Error 500: can not castVote."})
    }
}