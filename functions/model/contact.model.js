const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
