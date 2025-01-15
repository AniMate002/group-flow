import mongoose, { Schema } from "mongoose";



const userSchema = new Schema({
    username: { type: String, required: true, unique: true},
    fullname: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    info: { type: String, default: ""},
    password: { type: String, required: true},
    profession: { type: String, default: "" },
    skills: [{ type: String, default: [] }],
    teams: [{ type: Schema.Types.ObjectId, ref: "Team", default: []}],
    mainImage: { type: String, default: "" },
    coverImage: { type: String, default: "https://cdnb.artstation.com/p/assets/images/images/083/737/611/large/size-5.jpg?1736682991" }
}, { timestamps: true })


export const User = mongoose.model("User", userSchema)