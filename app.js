const objects = require('./objects');
const fileIO = require('./fileIO');


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

