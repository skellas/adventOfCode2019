const FuelCounterUpper = require('./src/FuelCounterUpper');
const fs = require('fs');

fs.readFile('./res/input.txt', 'utf8', (err, contents) => {
    console.log(contents.split("\n")
            .map(val => FuelCounterUpper.calculateFuelUsageByMass(val))
            .reduce((a,b) => a + b, 0 )
        );
});