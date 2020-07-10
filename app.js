const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
	res.send("We are on home");
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
	console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
	console.log("mongoose is connected");
});

// How to listen to server
app.listen(3000);
