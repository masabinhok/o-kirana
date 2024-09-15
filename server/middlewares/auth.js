const jwt = require("jsonwebtoken");

const userModel = require("../models/user");

const auth = async (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    console.log("No token, authorization denied");
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    console.log("Verifying token");
    const decoded = jwt.verify(token, "secret");
    let user = await userModel.findOne({
      _id: decoded.user.id,
    });
    console.log("User found");
    req.user = user;
    next();
  } catch (err) {
    console.log("Invalid token");
    res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = auth;
