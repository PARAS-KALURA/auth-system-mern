// Runs before main logic
// Gatekeeper / security layer

require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/User")

const protect =  async(req, res, next) => {
   
    
    // check if token exists
    try {
     if(!req.headers.authorization?.startsWith("Bearer")) {
        return res.status(401).json({message: "No token provided"})
     }
    
     // get token
      const token = req.headers.authorization.split(" ")[1];


      // verify token
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decode.id).select("-password");

if (!user) {
  return res.status(401).json({ message: "User not found" });
}

req.user = user;

      next();

    } catch(err) {
        res.status(401).json({message: "Invalid Token"})
    }
    
};

module.exports = { protect }