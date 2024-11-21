const db = require("../config/db");

const addAddress = (
  user_id,
  street,
  city,
  state,
  postal_code,
  country,
  callback
) => {
  const query = `
    INSERT INTO addresses (user_id, street, city, state, postal_code, country)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
  `;

  db.query(
    query,
    [user_id, street, city, state, postal_code, country],
    (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        callback(err, null);
      } else {
        callback(null, result.rows[0]);
      }
    }
  );
};

const getAddresses = (callback) => {
  const query = "SELECT * FROM addresses;";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      callback(err, null);
    } else {
      callback(null, result.rows);
    }
  });
};

module.exports = { addAddress, getAddresses };
