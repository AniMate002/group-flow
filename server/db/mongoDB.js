import mongoose from "mongoose";


export const connectMongoDB = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("MongoDb connected: ", connection.connection.host)
    }catch(e){
        console.log("Error: unable to connect database: ", e.message)
    }
}