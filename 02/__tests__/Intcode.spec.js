const Intcode = require('../src/Intcode');

describe('Intcode Runner', () => {
    it('will run initial sample', () => {
        const inputCodes = "1,9,10,3,2,3,11,0,99,30,40,50";

        expect(Intcode(inputCodes)).toEqual("3500,9,10,70,2,3,11,0,99,30,40,50");
    });
});