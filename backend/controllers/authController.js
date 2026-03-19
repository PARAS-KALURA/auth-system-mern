const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @desc Register user
// @route POST /api/auth/register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
}

        // 1️⃣ Check if user exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // 2️⃣ Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 3️⃣ Create user
        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        // 4️⃣ Save to DB
        await user.save();

        // 5️⃣ Response
        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerUser };