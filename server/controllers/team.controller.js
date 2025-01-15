import { Team } from "../models/team.model.js"
import { User } from "../models/user.model.js"


export const createTeam = async (req, res) => {
    try {
        const { team_name, project_name, description, deadline } = req.body
        let { mainImage, coverImage } = req.body
        const userId = req.user._id

        const user = await User.findById(userId)
        if(!user) return res.status(404).json({erorr: "User not found."})

        if(!team_name || !project_name) return res.status(400).json({erorr: "Team and project name values can not be empty."})

        if(!mainImage){
            // GENERATING IMAGE WITH IMAGE PLACEHOLDER
            mainImage = `https://avatar.iran.liara.run/username?username=${project_name}`
        }

        const newTeam = new Team({team_name, project_name, description, deadline, mainImage, coverImage, admins: [user._id], developers: [user._id]})
        await Promise.all([
            newTeam.save(),
            User.findByIdAndUpdate(userId, { $push: { teams: newTeam._id }})
        ])

        return res.status(201).json(newTeam)

    } catch (error) {
        console.log(" Error in createTeamController: ", error.message)
        return res.status(500).json({error: "Error 500: can not createTeam"})
    }
}

export const getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find()
        .populate({
            path: "developers"
        })
        return res.status(200).json(teams)
    } catch (error) {
        console.log(" Error in getAllTeamsController: ", error.message)
        return res.status(500).json({error: "Error 500: can not getAllTeams"})
    }
}


export const getTeamById = async (req, res) => {
    try {
        const teamId = req.params.teamId
        const team = await Team.findById(teamId)
        .populate({
            path: "developers"
        })

        if(!team) return res.status(404).json({error: "Team not found."})
        return res.status(200).json(team)
    } catch (error) {
        console.log(" Error in getTeamByIdController: ", error.message)
        return res.status(500).json({error: "Error 500: can not getTeamById"})
    }
}

export const getTeamByName = async (req, res) => {
    try {
        const teamName = req.params.teamName
        const team = await Team.findOne({team_name: teamName})


        if(!team) return res.status(404).json({error: "Team not found."})
        return res.status(200).json(team)
    } catch (error) {
        console.log(" Error in getTeamByNameController: ", error.message)
        return res.status(500).json({error: "Error 500: can not getTeamByName"})
    }
}



export const updateTeam = async (req, res) => {
    try {
        const userId = req.user._id
        const teamId = req.params.teamId
        const { team_name, project_name, description, deadline, goals, links } = req.body
        let { mainImage, coverImage } = req.body

        const user = await User.findById(userId)
        if(!user) return res.status(404).json({erorr: "User not found."})

        const team = await Team.findById(teamId)
        if(!team) return res.status(404).json({error: "Team not found."})

        const isParticipant = team.developers.includes(user._id.toString())
        if(!isParticipant) return res.status(404).json({erorr: "You're not authorized to do this action."})


        team.team_name = team_name || team.team_name
        team.project_name = project_name || team.project_name
        team.description = description || team.description
        team.deadline = deadline || team.deadline
        team.mainImage = mainImage || team.mainImage
        team.coverImage = coverImage || team.coverImage
        team.goals = goals || team.goals
        team.links = links || team.links

        await team.save()

        return res.status(200).json(team)
    } catch (error) {
        console.log(" Error in updateTeamController: ", error.message)
        return res.status(500).json({error: "Error 500: can not updateTeam"})
    }
}



export const addAdmin = async (req, res) => {
    try {
        const newAdminId = req.body.newAdminId
        const userId = req.user._id
        const teamId = req.params.teamId

        const newAdmin = await User.findById(newAdminId)
        if(!newAdmin) return res.status(404).json({erorr: "Selected user not found."})

        const user = await User.findById(userId)
        if(!user) return res.status(404).json({erorr: "User not found."})

        const team = await Team.findById(teamId)
        if(!team) return res.status(404).json({error: "Team not found."})

        const isAuthorized = team.admins.includes(user._id.toString())
        if(!isAuthorized) return res.status(400).json({error: "You are not authorized to do this action."})

        const isDeveloper = team.developers.includes(newAdmin._id.toString())
        if(!isDeveloper) return res.status(400).json({error: "This user is not part of the team."})

        const isAlreadyAdmin = team.admins.includes(newAdmin._id.toString())
        if(isAlreadyAdmin) return res.status(400).json({error: "Selected user is alrady an Admin"})


        team.admins.push(newAdmin._id)

        await team.save()

        return res.status(200).json(team)
    } catch (error) {
        console.log(" Error in addAdminController: ", error.message)
        return res.status(500).json({error: "Error 500: can not addAdmin"})
    }
}



export const joinOrLeave = async (req, res) => {
    try {
        const userId = req.user._id
        const teamId = req.params.teamId

        const user = await User.findById(userId)
        if(!user) return res.status(404).json({erorr: "User not found."})

        const team = await Team.findById(teamId)
        if(!team) return res.status(404).json({error: "Team not found."})

        const isParticipant = team.developers.includes(user._id.toString())
        if(isParticipant){
            // Leave
            await Promise.all([
                Team.findByIdAndUpdate(teamId, { $pull: { developers: userId, admins: userId }}),
                User.findByIdAndUpdate(userId, { $pull: { teams: teamId }})
            ])
            return res.status(404).json({error: "Left successfully."})
        }else{
            // Join
            await Promise.all([
                Team.findByIdAndUpdate(teamId, { $push: { developers: userId }}),
                User.findByIdAndUpdate(userId, { $push: { teams: teamId }})
            ])
            return res.status(404).json({error: "Joined successfully."})
        }

    } catch (error) {
        console.log(" Error in joinOrLeaveController: ", error.message)
        return res.status(500).json({error: "Error 500: can not joinOrLeave"})
    }
}