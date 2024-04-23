const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name."],
    trim: true,
    maxlength: [25, "A user name must have less or equal than 15 characters."],
    minlength: [3, "A user name must have more or equal than 4 character."],
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
