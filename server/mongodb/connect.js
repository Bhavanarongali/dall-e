import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
const connectDB = () =>{
    mongoose.set('strictQuery',true);
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() =>console.log("DB connected succesfully"))
    .catch((error)=>{
        console.log("DB connection failed");
        console.error(error);
        process.exit(1);
    })
}
export default connectDB;