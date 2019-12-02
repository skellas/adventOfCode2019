const calculateFuelUsageByMass = function calculateFuelUsageByMass(mass) {
    return mass > 6 ? Math.floor(mass / 3) - 2 : 0;
};
const calculateTrueFuelUsageByMass = function calculateTrueFuelUsageByMass(mass) {
    var initialUsage = calculateFuelUsageByMass(mass);
    return initialUsage <= 0 ? initialUsage : initialUsage + calculateTrueFuelUsageByMass(initialUsage);
};

module.exports = {
   calculateFuelUsageByMass,
   calculateTrueFuelUsageByMass
};
