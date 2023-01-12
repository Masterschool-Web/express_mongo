import express from "express";
import {register} from "../service/userService.js";
const router = express.Router();

router.post('/register', async (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).send("Oops...No message body present");
    }
    if (!body.username || !body.password) {
        return res.status(400).send("Provide username & password to register.");
    }
    const result = await register(body.username, body.password, body.firstName, body.lastName)
    if (!result){
        return res.status(400).send("Oops..Something went wrong");
    }
    res.status(200).send("Registration successful");
});

export { router as userRouter };