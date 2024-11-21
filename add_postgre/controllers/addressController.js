const addressModel = require("../models/addressModel");

// Add address handler
const addAddress = (req, res) => {
  const { user_id, street, city, state, postal_code, country } = req.body;

  addressModel.addAddress(
    user_id,
    street,
    city,
    state,
    postal_code,
    country,
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Failed to add address" });
      }
      res
        .status(201)
        .json({ message: "Address added successfully", data: result });
    }
  );
};

// Get all addresses handler
const getAddresses = (req, res) => {
  const { user_id } = req.params;

  addressModel.getAddresses(user_id, (err, addresses) => {
    if (err) {
      return res.status(500).json({ error: "Failed to retrieve addresses" });
    }
    res
      .status(200)
      .json({ message: "Addresses retrieved successfully", data: addresses });
  });
};

module.exports = {
  addAddress,
  getAddresses,
};
