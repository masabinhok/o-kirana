const jwt = require("jsonwebtoken");
require("dotenv").config();
const userModel = require("../models/user");

const auth = async (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    let user = await user.find({
      _id: decoded.user.id,
    });
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = auth;
