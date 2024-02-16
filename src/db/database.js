import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectdb = async () =>{
    try {

        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        console.log(`MongoDB is connected && DB Host ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("MONGODB connection Error",error)
        process.exit(1);
    }
}
export default connectdb;