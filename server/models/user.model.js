import mongoose, { Schema } from "mongoose";



const userSchema = new Schema({
    username: { type: String, required: true, unique: true},
    fullname: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    info: { type: String},
    password: { type: String, required: true},
    fullname: { type: String },
    profession: { type: String },
    skills: [{ type: String }],
    teams: [{ type: Schema.Types.ObjectId, ref: "Team", default: []}]
}, { timestamps: true })


export const User = mongoose.model("User", userSchema)