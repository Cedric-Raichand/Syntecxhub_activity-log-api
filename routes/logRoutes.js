const express = require("express");

const router = express.Router();

const AuditLog = require("../models/AuditLog");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");


// GET ALL LOGS
router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {

    try {

      const {
        action,
        user,
        startDate,
        endDate
      } = req.query;

      const filter = {};

      // FILTER BY ACTION
      if (action) {
        filter.action = action;
      }

      // FILTER BY USER
      if (user) {
        filter.performedBy = user;
      }

      // FILTER BY DATE RANGE
      if (startDate || endDate) {

        filter.createdAt = {};

        if (startDate) {
          filter.createdAt.$gte = new Date(startDate);
        }

        if (endDate) {
          filter.createdAt.$lte = new Date(endDate);
        }

      }

      const logs = await AuditLog.find(filter)
        .sort({ createdAt: -1 });

      res.json(logs);

    } catch (err) {

      res.status(500).json({
        error: err.message
      });

    }

  }
);

module.exports = router;