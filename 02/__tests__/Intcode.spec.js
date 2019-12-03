const Intcode = require('../src/Intcode');

describe('Intcode Runner', () => {
    it('will run initial sample', () => {
        const inputCodes = "1,9,10,3,2,3,11,0,99,30,40,50";

        expect(Intcode(inputCodes)).toEqual("3500,9,10,70,2,3,11,0,99,30,40,50");
    });
    it('will run small sample 1', () => {
        const inputCodes = "1,0,0,0,99";

        expect(Intcode(inputCodes)).toEqual("2,0,0,0,99");
    });
    it('will run small sample 2', () => {
        const inputCodes = "2,3,0,3,99";

        expect(Intcode(inputCodes)).toEqual("2,3,0,6,99");
    });
    it('will run small sample 3', () => {
        const inputCodes = "2,4,4,5,99,0";

        expect(Intcode(inputCodes)).toEqual("2,4,4,5,99,9801");
    });
    it('will run small sample 4', () => {
        const inputCodes = "1,1,1,4,99,5,6,0,99";

        expect(Intcode(inputCodes)).toEqual("30,1,1,4,2,5,6,0,99");
    });
});