const mongoose = require("mongoose");

const visitorSchema = {
  email: String,
  mobile: Number
};

const visit = mongoose.model("visit", visitorSchema);

export { visit };
