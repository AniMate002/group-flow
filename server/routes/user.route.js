import { Router } from "express";
import { getAllUsers } from "../controllers/user.controller.js"

const router = Router()

router.get("/", getAllUsers)

export default router;