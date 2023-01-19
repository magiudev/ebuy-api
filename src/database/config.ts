import mongoose from "mongoose";
import { dbUrl } from "../config";

// Establish a connection or throw an error to stop the server
const startDbConnection = async () => {
    mongoose.set("strictQuery", false);
    await mongoose.connect(dbUrl);
    console.log("Database connected successfully!");
}

export default startDbConnection;
