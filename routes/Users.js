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
  console.log("THIS IS USER DATA");
  console.log(userData);
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        console.log("THIS IS USER DATA");
        console.log(userData);
        const hash = bcrypt.hashSync(userData.password, 10);
        userData.password = hash;
        User.create(userData)
          .then(user => {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            });
            res.json({ token: token });
          })
          .catch(err => {
            res.send("error: " + err);
          });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
  // console.log(userData);
  // db work goes here
});

// Route "/login"

users.post("/login", (req, res) => {
  // console.log(req.body.email, req.body.password);
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        });
        res.json({ token: token });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

// Route "/profile"
users.get("/profile", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.send("User does not exist");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});
module.exports = users;
