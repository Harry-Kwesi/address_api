const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");

// Create a new address
router.post("/addresses", addressController.createAddress);

// Get all addresses
router.get("/addresses", addressController.getAllAddresses);

// Get addresses by userId
router.get("/addresses/:userId", addressController.getUserAddresses);

module.exports = router;
