import jwt from "jsonwebtoken"


export const generateTokenAndSetCookie = (userId, res) => {
    try{
        const token = jwt.sign({userId}, process.env.JWT_SECRET, {
            expiresIn: "15d"
        })

        res.cookie("jwt", token, {
            maxAge: 15*24*60*60*1000,
            // httpOnly: true,
            // sameSite: "strict",
            // secure: true
        })
    }catch(error){
        console.log("Error in generateTokenAndSetCookie: ", error.message)
        return res.status(500).json({error: "Error in generating web token."})
    }
}