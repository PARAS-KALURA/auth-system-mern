const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

const { registerUser, getAllUsers, loginUser } = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getAllUsers);
router.get("/test", protect, (req, res) => {
    res.send("Protected route working");
});

module.exports = router;