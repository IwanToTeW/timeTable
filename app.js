const objects = require("./objects");
const fileIO = require("./fileIO");
const express = require("express");

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
app.get("/users", (req, res) => {
  res.json([{ id: 1, username: "userOne" }, { id: 2, username: "userTwo" }]);
});

app.listen(3001, () =>
  console.log("Express server listening on port 3001 !!!")
);
