const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth, (req, res) => {
  res.status(200).json({ user: req.user });
});

module.exports = router;
