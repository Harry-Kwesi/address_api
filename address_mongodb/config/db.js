const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // Remove deprecated options (e.g., `useUnifiedTopology`)
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
