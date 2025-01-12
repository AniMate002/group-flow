import { model, Schema } from "mongoose";



const teamSchema = new Schema({
    team_name: { type: String, required: true },
    project_name: { type: String, required: true },
    description: { type: String, default: "" },
    deadline: { type: String, default: "" },
    messages: [{ type: Schema.Types.ObjectId, ref: "Message", default: []}],
    developers: [{ type: Schema.Types.ObjectId, ref: "User", default: []}],
    admins: [{ type: Schema.Types.ObjectId, ref: "User", default: []}],
    mainImage: { type: String, default: "" },
    coverImage: { type: String, default: "" },
    images: [{ type: String }],
    goals: [{ type: String }],
    progress: { type: Number },
    links: [{
        name: { type: String },
        href: { type: String }
    }],
    votes: [{ type: Schema.Types.ObjectId, ref: "Vote", default: []}]
})

export const Team = model("Team", teamSchema)