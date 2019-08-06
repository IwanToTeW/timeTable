const objects = require("./objects");
const fileIO = require("./fileIO");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//  USING PROMISES
// const jsonData = fileIO.readFile("lessons.csv").then(values => {return values}).catch(err=>console.log(err));

async function getObjects(fileName) {
  try {
    let lessons = await fileIO.readFile(fileName);
    console.log(lessons);
    return lessons;
  } catch (err) {
    console.log(err);
  }
}

let lessons = getObjects("lessons.csv");
console.log(lessons);

// Below goes server code
const app = express();
// this line is required in order to parse url encoded forms
app.use(bodyParser.urlencoded({ extended: false }));
// this line is required in order to get json data
app.use(bodyParser.json());
app.use(cors());
app.get("/users", (req, res) => {
  res.json([{ id: 1, username: "userOne" }, { id: 2, username: "userTwo" }]);
});

// app.post("/register", (req, res) => {
//   console.log(req.body);
//   // database work goes here
//   res.send("successfully posted");
// });
const Users = require("./routes/Users.js");
const FileIO = require("./routes/FileIO.js");
app.use("/", Users);

app.listen(3001, () =>
  console.log("Express server listening on port 3001 !!!")
);
