const express = require("express");
const { generatePlaceholder } = require("../controllers/placeholder.controller");
const route = express.Router();

route.get("/:size.:filetype", generatePlaceholder);

route.get("/:size", generatePlaceholder);

module.exports = route;
