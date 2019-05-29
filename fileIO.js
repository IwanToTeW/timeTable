const fs = require('fs');
const CSVtoJSON = require('csvtojson');
// const JSONtoCSV = require('json2csv').parse;

function createFile(fileName, data){
    fs.writeFile(fileName, data, (err)=> {
        if (err)
            console.log(err);
        else
            console.log('Time table successfully created!');
                
    });
}

function readFile(fileName) {
    CSVtoJSON().fromFile('./' + fileName).then(source => {
            // console.log(source); 
            return new Promise((resolve, reject) => {
                if (source !== undefined)
                    resolve(source)
                else
                    reject('No Content')
            });
           
    })
}

function renameFile(fileName, newName) {

    fs.rename(fileName, newName, (err)=>{
        if (err)
            console.log(err);
        else 
            console.log('You have successfully renamed the file to ' + newName);
    });
}

function addLineToFile(fileName, data) {
    fs.appendFile(fileName, data, (err)=>{
        if (err)
            console.log(err);
        else 
            console.log('You have succesfully modified the file ' + fileName );
    });
}


function deleteFile(fileName) {
    fs.unlink(fileName,(err)=>{
        if (err)
            console.log(err);
        else
            console.log('File ' + fileName + 'has been successfully deleted');
    });
}

module.exports = 
{
    createFile : createFile, 
    renameFile : renameFile, 
    addLineToFile : addLineToFile, 
    deleteFile : deleteFile, 
    readFile : readFile,
};

