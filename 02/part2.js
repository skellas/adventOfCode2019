const Intcode = require('./src/Intcode');
const fs = require('fs');
const upperBound = 100;
const lowerBound = 0;
const targetValue = 19690720;
let j = 0;
let nounStep = 50;
let verbStep = 50;
let currentNounPosition = upperBound - nounStep;
let currentVerbPosition = upperBound - verbStep;
while (currentNounPosition >= 0 && currentNounPosition <= upperBound) {
    let contents = fs.readFileSync('./res/input.txt', 'utf8');
    let ingestedCodes = contents.split(",").map(val => parseInt(val));
    ingestedCodes[1] = currentNounPosition;
    ingestedCodes[2] = currentVerbPosition;
    const updatedCodes = Intcode(ingestedCodes.toString());
    let foundValue = parseInt(updatedCodes.split(",")[0]);
    if (foundValue == targetValue) break;
    bubbleNounValues(foundValue);
    bubbleVerbValues(foundValue);
}
console.log(currentNounPosition*100 + currentVerbPosition);
function bubbleNounValues(foundValue) {
    if (foundValue - upperBound >= targetValue) {
        nounStep = Math.ceil(nounStep/2);
        currentNounPosition -= nounStep;
    }
    if (foundValue + upperBound <= targetValue) {
        nounStep = Math.ceil(nounStep/2);
        currentNounPosition += nounStep;
    }
}
function bubbleVerbValues(foundValue) {
    if (lowerBound <= targetValue - foundValue <= upperBound) {
        if (foundValue - verbStep >= targetValue) {
            verbStep = Math.ceil(verbStep/2);
            currentVerbPosition -= verbStep;
        }
        if (foundValue + verbStep <= targetValue) {
            verbStep = Math.ceil(verbStep/2);
            currentVerbPosition += verbStep;
        }
    }
}