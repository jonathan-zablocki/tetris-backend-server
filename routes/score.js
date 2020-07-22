const express = require("express");
const router = express.Router();
const Score = require("../models/Score");

// Get all scores
router.get("/", async (req, res) => {
	try {
		const scores = await Score.find().sort({ score: -1 }).limit(50);
		res.json(scores);
	} catch (err) {
		res.json({ message: err });
	}
});

//Submits a score
router.post("/", async (req, res) => {
	const score = new Score({
		score: req.body.score,
	});

	try {
		const savedScore = await score.save();
		res.json(savedScore);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
