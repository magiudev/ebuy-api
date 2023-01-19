import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: "string",
    password: "string"
});

const User = model("users", userSchema);
export default User;
