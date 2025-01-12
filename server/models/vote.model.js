import { model, Schema } from "mongoose";




const voteSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    team: { type: Schema.Types.ObjectId, required: true }, 
    options: [
        {
            text: { type: String, required: true },
            voters: [{ type: Schema.Types.ObjectId, ref: "User", default: []}]
        }
    ]
}, { timestamps: true })

export const Vote = model("Vote", voteSchema)