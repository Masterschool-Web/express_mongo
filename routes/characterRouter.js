import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("CATCH ALL");
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