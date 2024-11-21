const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");

// Route to add an address
router.post("/add", addressController.addAddress);

// Route to get all addresses for a user
router.get("/:user_id", addressController.getAddresses);

module.exports = router;
