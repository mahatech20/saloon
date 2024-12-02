const express = require("express");
const db = require("../config/dbConfig"); // Import the database connection

const router = express.Router();

// Ensure the database is connected
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1); // Exit the process if connection fails
  }
  console.log("Connected to MySQL Database from appointmentRoutes.js.");
});

// Example route definition
router.get("/", (req, res) => {
  res.send("This is the appointments endpoint");
});

module.exports = router;
