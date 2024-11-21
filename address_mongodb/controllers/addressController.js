const Address = require("../models/addressModel");

// Create a new address
exports.createAddress = async (req, res) => {
  try {
    const newAddress = await Address.create(req.body);
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all addresses
exports.getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.findAll();
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get addresses by userId
exports.getUserAddresses = async (req, res) => {
  try {
    const { userId } = req.params;
    const addresses = await Address.findAll({ where: { userId } });
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
