const fs = require("fs");
const path = require("path");
const notes = require("../db/db.json");
const express = require("express");
const router = express.Router();

router.get("/notes", (req, res) => {
    res.json(notes);
});

module.exports = router;
