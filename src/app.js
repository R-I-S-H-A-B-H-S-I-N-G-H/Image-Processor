const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const placeholderRoute = require("./routes/placeholder.route");
const imageProcessRoute = require("./routes/imageProcess.route");
const { apiDescription } = require("./configs/Description");

app.use(cors());
app.use(helmet());
app.use(
	express.json({
		limit: "15kb",
	}),
);

// Routes
app.use("/placeholder", placeholderRoute);
app.use("/edit", imageProcessRoute);

app.use("/", (req, res) => {
	res.json(apiDescription);
});

// handle 404 routes
app.use("*", (req, res, next) => {
	res.status(404).json("THIS API PATH IS NOT DEFINED");
});

module.exports = app;
