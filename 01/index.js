const calculateFuelUsageByMass = require('./src/FuelCounterUpper');
const fs = require('fs');

fs.readFile('./res/input.txt', 'utf8', (err, contents) => {
    console.log(contents.split("\n").map(val => {
        console.log(`calculating fuel usage for mass ${val}`);
        return calculateFuelUsageByMass(val);
    }).reduce((a,b) => {
        console.log(`adding ${b} to ${a}`);
        return a + b;
    }, 0 ));
});