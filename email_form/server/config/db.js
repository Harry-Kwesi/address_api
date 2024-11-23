require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async (dbEnvKey) => {
  try {
    const dbUri = process.env.MONGODB_URI;
    if (!dbUri) throw new Error(`Database URI for ${dbUri} not found`);
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected to ${dbUri}`);
  } catch (err) {
    console.error(`MongoDB connection error for ${dbUri}:`, err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
