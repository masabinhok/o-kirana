const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();
const connectDB = require("./connect");
require("dotenv").config();

//connect to db
connectDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const allowedOrigins = [
  process.env.ORIGIN_1,
  process.env.ORIGIN_2,
  process.env.ORIGIN_3,
]; // Example origins

//cors
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        console.log(`Origin allowed: ${origin}`);
        callback(null, true); // Allow if origin is found in allowedOrigins
      } else {
        console.log(`Blocked origin: ${origin}`);
        callback(new Error("Not allowed by CORS")); // Block if origin not in allowedOrigins
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"], // Methods allowed by the server
  })
);

//import routes
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");

//routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);

//server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
