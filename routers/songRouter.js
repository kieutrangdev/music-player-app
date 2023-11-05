const express = require("express");
const router = express.Router();
const authMiddleWare = require("../middlewares/authMiddleware");
const Song = require("../model/songModel")
router.post("/get-all-songs", authMiddleWare, async(req, res) => {
    try {
        const songs = await Song.find()
        res.status(200).send({message: "Song fetched successfully", success : true, data: songs})

    }
    catch(error) {
        res.status(500).send({message: "Error fetched songs", success : false, data:songs})
    }
})

module.exports = router;