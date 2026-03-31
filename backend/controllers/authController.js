const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @desc Register user
// @route POST /api/auth/register


const loginUser = async (req, res) => {
    try {

        const {email, password} = req.body;

        //check
        if(!email || !password) {
            return res.status(400).json({message: "All field required !"});
        }

        //Find user in DB

        const user = await User.findOne({ email });

        //if user not found
        if(!user) {
            return res.status(400).json({message: "User not found"});
        }

        //compaare password
        //Compares entered password with hashed password in DB.
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).json({message: "Invalid Paswsword"});
        }
        
        //Generate JWT token - for 30 days
        const token = jwt.sign(
            {id: user._id},
            "secret",
            {expiresIn: "30d"}
    );

    // Send success response
    //Sends user data + token to frontend.
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: token
    });

    } catch(err) {
        res.status(500).json({message: "Server Error"})
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");

        res.json(users);
    }

    //Get data → Check → Find user → Match password → Create token → Send response

    catch (err) {
        res.status(500).json({ message: "Server Error" })
    }
}

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

module.exports = { registerUser, getAllUsers, loginUser};