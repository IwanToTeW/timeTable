const express = require("express");
const fileIO = express.Router();
const cors = require("cors");

fileIO.use(cors());

//Route "/upload"
fileIO.post("/upload", (req, res) => {});

//Route "/download"
fileIO.post("/download", (req, res) => {
  console.log("Donwload successfully posted");
});

module.exports = fileIO;
