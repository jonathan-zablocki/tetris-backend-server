const express = require("express");
const router = express.Router();
const Score = require("../models/Score");

// Get all scores
router.get("/", async (req, res) => {
	try {
		const scores = await Score.find();
		res.json(scores);
	} catch (err) {
		res.json({ message: err });
	}
});

//Submits a score
router.post("/", async (req, res) => {
	const score = new Score({
		title: req.body.title,
		description: req.body.description,
	});

	try {
		const savedScore = await score.save();
		res.json(savedScore);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
