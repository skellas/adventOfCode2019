module.exports = function run(inputCodes) {
    const codeArray = inputCodes.split(",").map(val => parseInt(val));
    for (let i = 0; i< codeArray.length; i = i+4) {
        let opCode = codeArray[i];
        if (opCode == 99) {
            i = codeArray.length;
            break;
        }
        let firstInt = codeArray[i+1];
        let secondInt = codeArray[i+2];
        let insertionPoint = codeArray[i+3];
        if (opCode == 1) {
            codeArray[insertionPoint] = codeArray[firstInt] + codeArray[secondInt];
        }
        if (opCode == 2) {
            codeArray[insertionPoint] = codeArray[firstInt] * codeArray[secondInt];
        }
    }
    return codeArray.toString();
};