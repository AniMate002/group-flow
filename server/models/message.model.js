import { model, Schema } from "mongoose";

const messageSchema = new Schema({
    text: { type: String },
    image: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    team: { type: String, required: true }
}, { timestamps: true })

export const Message = model("Message", messageSchema)