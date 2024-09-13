const router = require("express").Router();

router.post("/login", (req, res) => {
  const { email, password, secretKey } = req.body;
  console.log(req.body);
  res.send(true);
});

router.post("/signup", (req, res) => {
  const { email, password, fullName } = req.body;
  console.log(req.body);
  res.send(true);
});

module.exports = router;
