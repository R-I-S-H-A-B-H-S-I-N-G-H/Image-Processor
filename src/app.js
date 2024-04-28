const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const placeholderRoute = require("./routes/placeholder.route");
const imageProcessRoute = require("./routes/imageProcess.route");

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

// handle 404 routes
app.use("*", (req, res, next) => {
	res.status(404).json("THIS API PATH IS NOT DEFINED");
});

module.exports = app;
