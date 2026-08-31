
import mongoose from "mongoose";
import { DB_NAME, } from "../constants.js";

async function connectDB() {
    try {
        const databaseConnectionHandler = await
            mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Database connected suscessfully:", databaseConnectionHandler.connection.host);
    } catch (error) {
        console.log('mongoDB connection error', error);
        process.exit(1);
    }
}

export default connectDB;
