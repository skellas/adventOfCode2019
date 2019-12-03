const Intcode = require('./src/Intcode');
const fs = require('fs');

fs.readFile('./res/input.txt', 'utf8', (err, contents) => {
    let ingestedCodes = contents.split(",").map(val => parseInt(val));
    ingestedCodes[1] = 12;
    ingestedCodes[2] = 2;
    const updatedCodes = Intcode(ingestedCodes.toString());
    console.log(updatedCodes.split(",")[0]);
});