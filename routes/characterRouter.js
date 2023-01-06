import express from "express";
import {
    loadData,
    getAll,
    getById,
    getByName,
    getByBirthMonth,
    getByBloodType,
    removeById
} from "../service/characterService.js";
const router = express.Router();

router.put('/load', async (req, res) => {
    const result = await loadData()
    if (!result){
        return res.status(400).send("Shit... this did not go well at all");
    }
    res.send('Data loaded');
});
router.post('/load', async (req, res) => {
    return res.status(401).send("Method not allowed");
});

router.delete('/load', async (req, res) => {
    return res.status(401).send("Method not allowed");
});

router.get('/load', async (req, res) => {
    return res.status(401).send("Method not allowed");
});

router.get("/", async (req, res) => {
    res.send(await getAll());
});

router.get("/id/:id", async (req, res) => {
    const { id } = req.params;
    const result = await getById(id)
    if (!result){
        return res.status(400).send("Oops...Didn't see that one coming");
    }
    res.send(result);
});

router.get("/name/:name", async (req, res) => {
    const { name } = req.params;
    const result = await getByName(name)
    if (!result){
        return res.status(400).send("Oops...Didn't see that one coming");
    }
    res.send(result);
});

router.get("/born/:month", async (req, res) => {
    const { month } = req.params;
    const result = await getByBirthMonth(month)
    if (!result){
        return res.status(400).send("Oops...Didn't see that one coming");
    }
    res.send(result);
});

router.get("/blood/:type", async (req, res) => {
    const { type } = req.params;
    const result = await getByBloodType(type)
    if (!result){
        return res.status(400).send("Oops...Didn't see that one coming");
    }
    res.send(result);
});

router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    const result = await removeById(id)
    if (!result){
        return res.status(400).send("Oops...Didn't see that one coming");
    }
    res.send(result);
});

router.get("/delete/:id", async (req, res) => {
    return res.status(401).send("Method not allowed");
});
router.post("/delete/:id", async (req, res) => {
    return res.status(401).send("Method not allowed");
});
router.put("/delete/:id", async (req, res) => {
    return res.status(401).send("Method not allowed");
});

export { router as characterRouter };