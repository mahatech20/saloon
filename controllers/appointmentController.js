const express = require("express");
const db = require("../config/dbConfig");

const router = express.Router();

// Scheduling
router.post("/appointments", (req, res) => {
  const { selected_date, selected_time, name, email, number, message } = req.body;

  // Validate required fields
  if (!selected_date || !selected_time || !name || !email) {
    return res.status(400).json({
      error: "All fields (date, time, name, email) are required",
    });
  }

  // Inserting data
  const query = `
    INSERT INTO appointments (selected_date, selected_time, name, email, number, message) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(
    query,
    [selected_date, selected_time, name, email, number, message],
    (err, result) => {
      if (err) {
        console.error("Database Insert Error:", err.message);
        return res.status(500).json({ error: "Database error occurred" });
      }

      // Respond with success
      res.status(201).json({
        message: "Appointment scheduled successfully",
        appointment: {
          id: result.insertId,
          selected_date,
          selected_time,
          name,
          email,
          number,
          message,
        },
      });
    }
  );
});

module.exports = router;
