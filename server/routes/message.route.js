import { Router } from "express"
import { protectRoute } from "../middleware/protectRoute.js"

import { sendMessage } from '../controllers/message.controller.js'

const router = Router()

// router.get("/", )
// router.get("/:teamId", )
router.post("/:teamId", protectRoute, sendMessage)
// router.delete("/:messageId", )

export default router