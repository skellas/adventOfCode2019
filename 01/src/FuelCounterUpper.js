module.exports = {
    calculateFuelUsageByMass: function calculateFuelUsageByMass(mass) {
        return mass > 2 ? Math.floor(mass / 3) - 2 : 0;
    },
    calculateTrueFuelUsageByMass: function calculateTrueFuelUsageByMass(mass) {
        return 2;
    }
};
