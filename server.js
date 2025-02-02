const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const appointmentRoutes = require("./routes/appointmentRoutes");

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routes
app.use("/api/appointments", appointmentRoutes);

// Start the server
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
