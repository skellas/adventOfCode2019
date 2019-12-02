const FuelUsageByMass = require('../src/FuelCounterUpper');
describe('Fuel Counter Upper', () => {
    it('will calculate for mass of 12', () => {
        expect(FuelUsageByMass.calculateFuelUsageByMass(12)).toEqual(2);
    });
    it('will calculate for mass of 14', () => {
        expect(FuelUsageByMass.calculateFuelUsageByMass(14)).toEqual(2);
    });
    it('will calculate for mass of 1969', () => {
        expect(FuelUsageByMass.calculateFuelUsageByMass(1969)).toEqual(654);
    });
    it('will calculate for mass of 100756', () => {
        expect(FuelUsageByMass.calculateFuelUsageByMass(100756)).toEqual(33583);
    });
    it('will calculate for mass of 50572', () => {
        expect(FuelUsageByMass.calculateFuelUsageByMass(50572)).toEqual(16855);
    });
    it('will calculate for mass of 98599', () => {
        expect(FuelUsageByMass.calculateFuelUsageByMass(98599)).toEqual(32864);
    });
    it('will calculate for mass of 1', () => {
        expect(FuelUsageByMass.calculateFuelUsageByMass(1)).toEqual(0);
    });
    it('will calculate true value for mass of 12', () => {
        expect(FuelUsageByMass.calculateTrueFuelUsageByMass(12)).toEqual(2);
    });
});