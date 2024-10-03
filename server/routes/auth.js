const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/signup", async (req, res) => {
  try {
    //access gareu data
    console.log(req.body);
    const { email, password, fullName } = req.body;

    //check if user exists
    let user = await userModel.findOne({ email });

    //if user exists, return error
    if (user) {
      console.log("User already exists");
      return res.status(400).json({ msg: "User already exists" });
    }

    //create user
    user = await userModel.create({ email, password, fullName });

    //hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = { user: { id: user._id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    console.error("Error during signup: ", err);
    res.status(500).json({ msg: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password, secretKey } = req.body;
    console.log(req.body);

    //check if user exists
    let user = await userModel.findOne({
      email,
    });

    console.log(user);

    if (!user) {
      console.log("User does not exist");
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    //check if password matches
    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    if (secretKey === "admin") {
      user.role = "ADMIN";
    } else if (secretKey === "seller") {
      user.role = "SELLER";
    } else if (secretKey === "") {
      user.role = "CUSTOMER";
    } else {
      return res.status(401).json({ msg: "Invalid secret key" });
    }
    await user.save();
    console.log(user.role);

    const payload = { user: { id: user._id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    console.error("Error during login: ", err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
