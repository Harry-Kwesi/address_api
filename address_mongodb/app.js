const express = require("express");
const connectDB = require("./config/db");
const addressRoutes = require("./routes/addressRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api", addressRoutes);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
