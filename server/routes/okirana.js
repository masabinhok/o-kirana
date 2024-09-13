const express = require("express");

const router = express.Router();

router.get("/", auth, (req, res) => {
  console.log(req.user);
  res.status(200).json({ user: req.user });
});
