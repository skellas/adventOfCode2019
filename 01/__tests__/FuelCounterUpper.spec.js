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
    it('will calculate for mass of 50572', () => {
        expect(calculateFuelUsageByMass(50572)).toEqual(16855);
    });
    it('will calculate for mass of 98599', () => {
        expect(calculateFuelUsageByMass(98599)).toEqual(32864);
    });
    it('will calculate for mass of 1', () => {
        expect(calculateFuelUsageByMass(1)).toEqual(0);
    });
});