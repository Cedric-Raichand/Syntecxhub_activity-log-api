const mongoose = require("mongoose");

const AuditLogSchema = new mongoose.Schema({

  action: {
    type: String,
    required: true
  },

  performedBy: {
    type: String,
    required: true
  },

  targetUser: {
    type: String
  },

  resourceId: {
    type: mongoose.Schema.Types.ObjectId
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("AuditLog", AuditLogSchema);