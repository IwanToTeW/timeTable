const objects = require('./objects');
const fileIO = require('./fileIO');


//  USING PROMISES
// const jsonData = fileIO.readFile("lessons.csv").then(values => {return values}).catch(err=>console.log(err));

async function getObjects(fileName) {
    await fileIO.readFile(fileName);

    return fileIO.getData();
}
const lessons = getObjects("lessons.csv");
console.log(lessons);