module.exports = function calculateFuelUsageByMass(mass) {
    return Math.floor(mass / 3) - 2;
};