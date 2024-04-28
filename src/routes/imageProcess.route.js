const express = require("express");
const { processImage } = require("../controllers/imageProcess.controller");
const route = express.Router();

route.get("", processImage);
module.exports = route;
