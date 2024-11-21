const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const addressRoutes = require("./routes/addressRoutes");

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Register address routes
app.use("/addresses", addressRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Address Book API");
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
