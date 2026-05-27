const express = require("express");

const router = express.Router();

const User = require("../models/User");
const AuditLog = require("../models/AuditLog");

const authMiddleware = require("../middleware/authMiddleware");


// UPDATE USER
router.put(
  "/:id",
  authMiddleware,
  async (req, res) => {

    try {

      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      ).select("-password");

      if (!updatedUser) {

        return res.status(404).json({
          message: "User not found"
        });

      }

      // CREATE AUDIT LOG
      await AuditLog.create({

        action: "Updated user",
        performedBy: req.user.email,
        targetUser: updatedUser.email,
        resourceId: updatedUser._id

      });

      res.json(updatedUser);

    } catch (err) {

      res.status(500).json({
        error: err.message
      });

    }

  }
);


// DELETE USER
router.delete(
  "/:id",
  authMiddleware,
  async (req, res) => {

    try {

      const deletedUser = await User.findByIdAndDelete(
        req.params.id
      );

      if (!deletedUser) {

        return res.status(404).json({
          message: "User not found"
        });

      }

      // CREATE AUDIT LOG
      await AuditLog.create({

        action: "Deleted user",
        performedBy: req.user.email,
        targetUser: deletedUser.email,
        resourceId: deletedUser._id

      });

      res.json({
        message: "User deleted successfully"
      });

    } catch (err) {

      res.status(500).json({
        error: err.message
      });

    }

  }
);

module.exports = router;