const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();
const connectDB = require("./connect");

//connect to db
connectDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//import routes
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const storeRoutes = require("./routes/store");

//routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/store", storeRoutes);

//server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
