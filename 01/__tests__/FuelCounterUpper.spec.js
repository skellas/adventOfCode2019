const calculateFuelUsageByMass = require('../src/FuelCounterUpper');
describe('Fuel Counter Upper', () => {
    it('will calculate for mass of 12', () => {
        expect(calculateFuelUsageByMass(12)).toEqual(2);
    });
});