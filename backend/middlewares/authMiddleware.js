require("dotenv").config();
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
   
    
    // check if token exists
    try {
     if(!req.headers.authorization) {
        return res.status(401).json({message: "No token provided"})
     }
    
     // get token
      const token = req.headers.authorization.split(" ")[1];

      console.log("TOKEN:", token);
      console.log("SECRET:", process.env.JWT_SECRET);


      // verify token
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decode;

      next();

    } catch(err) {
        res.status(401).json({message: "Invalid Token"})
    }
    
};

module.exports = { protect }