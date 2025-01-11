import { Router } from "express";
import { protectRoute } from "../middleware/protectRoute.js";

import { castVote, createVote } from "../controllers/vote.controller.js"


const router = Router()

router.post("/create-vote/:teamId", protectRoute, createVote)
router.post("/cast-vote/:voteId", protectRoute, castVote)

export default router