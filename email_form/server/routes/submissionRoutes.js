const express = require("express");
const router = express.Router();
const { submitForm } = require("../controllers/submissionController");

// POST /api/submit
router.post("/submit", submitForm);

module.exports = router;
