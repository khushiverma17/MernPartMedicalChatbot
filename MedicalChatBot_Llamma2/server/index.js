const express = require("express");
require("dotenv").config();
const app = express();
const connect = require("./database/db");

// Middleware to parse JSON
app.use(express.json());

// Import and use routes
const createUserRoute = require("./Routes/CreateUser.js");
app.use("/api", createUserRoute);
const loginUserRoute = require("./Routes/LoginUser.js")
app.use("/api", loginUserRoute)

// Start server and connect to database
app.listen(process.env.port, () => {
  connect();
  console.log("Server is running on port", process.env.port);
});
