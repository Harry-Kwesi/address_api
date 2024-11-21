const express = require("express");
const { connectDB } = require("./config/db");
const addressRoutes = require("./routes/addressRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to the MySQL database
connectDB();

// Middleware
app.use(express.json());

const Address = require("./models/addressModel");

// Sync the Address model with the database
Address.sync({ alter: true })
  .then(() => console.log("Address table created/updated"))
  .catch((error) => console.error("Error creating/updating table:", error));

// Routes
app.use("/api", addressRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
