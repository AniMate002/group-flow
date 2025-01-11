import { Router } from "express";
import { signUp, logIn } from "../controllers/auth.controller.js";

const router = Router()

// router.get("/me", )
router.post("/login", logIn)
router.post("/signup", signUp)
// router.post("/logout", )

export default router

