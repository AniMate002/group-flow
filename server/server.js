import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import { connectMongoDB } from "./db/mongoDB.js"

import userRouter from './routes/user.route.js'
import authRouter from "./routes/auth.router.js"
import messagesRouter from "./routes/message.route.js"
import voteRouter from "./routes/vote.route.js"
import teamRouter from "./routes/team.route.js"

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

const PORT = process.env.PORT || 5000


app.use("/api/users", userRouter)
app.use("/api/auth", authRouter)
app.use("/api/messages", messagesRouter)
app.use("/api/votes", voteRouter)
app.use("/api/teams", teamRouter)



app.listen(PORT, () => {
    console.log("_____________________Running server on PORT: ", PORT)
    connectMongoDB()
})