import express from "express";
import {loadData, getAll} from "../service/characterService.js";
const router = express.Router();

router.put('/load', async (req, res) => {
    const result = await loadData()
    if (!result){
        return res.status(400).send("Shit... this did not go well at all");
    }
    res.send('Data loaded');
});

router.get("/", async (req, res) => {
    res.send(await getAll());
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const result = true
    if (!result){
        return res.status(400).send("Oops...Didn't see that one coming");
    }
    res.send(result);
});

export { router as characterRouter };