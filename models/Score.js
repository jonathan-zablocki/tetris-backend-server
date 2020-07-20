const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
	score: { type: Number, required: true },
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Score", PostSchema);
