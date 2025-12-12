import mongoose from 'mongoose';
export const connectDB=async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/chat");
        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch(error){
                console.log(`MongoDB connected error: ${error}`);


    }
}
