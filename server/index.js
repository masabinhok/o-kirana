const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

//server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
