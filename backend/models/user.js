const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  role: { type: String, required: true, enum: ["admin", "buyer", "seller"] },
  products: [{ type: mongoose.Types.ObjectId, required: true, ref: "Product" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
