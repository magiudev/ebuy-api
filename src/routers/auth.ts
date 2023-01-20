import { Router, Request, Response } from "express";
import { hash } from "bcryptjs";
import User from "../database/entities/user";

const router = Router();

router.post("/register", async (request: Request, response: Response) => {

    // Get data sent 
    const {username, password} = request.body;

    // Check it the username is already taken
    let user = await User.findOne({ username });
    if(user) return response.status(400).json({ error: "This username is already in use" });

    // Save the new user
    const hashedPassword = await hash(password, 10);
    user = new User({ username, password: hashedPassword });
    await user.save();

    // Send a response
    response.status(201).json({ message: "Successful registration. Please login." });
});

export default router;
