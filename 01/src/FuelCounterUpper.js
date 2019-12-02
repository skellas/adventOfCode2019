module.exports = function calculateFuelUsageByMass(mass) {
    return mass > 2 ? Math.floor(mass / 3) - 2 : 0;
};