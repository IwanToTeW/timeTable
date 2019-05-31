const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../modules/User.js");
users.use(cors());

process.env.SECRET_KEY = "totev";

// Route "/register"
users.post("/register", (req, res) => {
  const todayDate = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: todayDate
  };
  console.log(userData);
  // db work goes here
});

module.exports = users;
