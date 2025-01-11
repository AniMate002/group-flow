import { Router } from "express";
import { signUp, logIn, getMe, logOut } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = Router()

router.get("/me", protectRoute, getMe)
router.post("/login", logIn)
router.post("/signup", signUp)
router.post("/logout", logOut)

export default router

