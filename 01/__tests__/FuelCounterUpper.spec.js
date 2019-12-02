const calculateFuelUsageByMass = require('../src/FuelCounterUpper');
describe('Fuel Counter Upper', () => {
    it('will calculate for mass of 12', () => {
        expect(calculateFuelUsageByMass(12)).toEqual(2);
    });
    it('will calculate for mass of 14', () => {
        expect(calculateFuelUsageByMass(14)).toEqual(2);
    });
    it('will calculate for mass of 1969', () => {
        expect(calculateFuelUsageByMass(1969)).toEqual(654);
    });
    it('will calculate for mass of 100756', () => {
        expect(calculateFuelUsageByMass(100756)).toEqual(33583);
    });
});