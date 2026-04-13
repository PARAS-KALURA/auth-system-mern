

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true   // no duplicate emails
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true   // adds createdAt automatically
});

module.exports = mongoose.model("User", userSchema);  //creates a User model + exports it so you can use it anywhere