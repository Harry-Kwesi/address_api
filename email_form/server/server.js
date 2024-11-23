require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const submissionRoutes = require("./routes/submissionRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

// Database connection
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api", submissionRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
