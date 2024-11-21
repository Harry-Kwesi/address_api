const db = require("../config/db");

// Add a new address
const addAddress = (
  user_id,
  street,
  city,
  state,
  postal_code,
  country,
  callback
) => {
  const query = `INSERT INTO addresses (user_id, street, city, state, postal_code, country) 
                 VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(
    query,
    [user_id, street, city, state, postal_code, country],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    }
  );
};

// Get all addresses for a user
const getAddresses = (user_id, callback) => {
  const query = `SELECT * FROM addresses WHERE user_id = ?`;
  db.query(query, [user_id], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  addAddress,
  getAddresses,
};
