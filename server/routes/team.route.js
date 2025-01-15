import { Router } from "express";
import { protectRoute } from "../middleware/protectRoute.js"
import { createTeam, getAllTeams, getTeamById, updateTeam, addAdmin, joinOrLeave, getTeamByName, getTeamsByProjectType } from "../controllers/team.controller.js"

const router = Router()

router.get("/", getAllTeams)
// router.get("/:teamId", getTeamById)
router.get("/:teamName", getTeamByName)
router.get("/getTeamsByProjectType/:projectType", getTeamsByProjectType)
router.post("/", protectRoute, createTeam)
router.put("/:teamId", protectRoute, updateTeam)
router.post("/addAdmin/:teamId", protectRoute, addAdmin)
// router.delete("/:teamId", protectRoute, deleteTeam)
router.post("/joinOrLeave/:teamId", protectRoute,joinOrLeave)


export default router