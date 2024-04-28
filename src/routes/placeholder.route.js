const express = require("express");
const { generatePlaceholder } = require("../controllers/placeholder.controller");
const route = express.Router();

route.get("/:size.:filetype", generatePlaceholder);

route.get("/:size", generatePlaceholder);

// route.get("/:width/:height", generatePlaceholder);

// route.get("/:width/:height.:filetype", generatePlaceholder);

module.exports = route;
