
const Utils = require('./utils.js');

module.exports = function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${sum}`);
    return sum;
}
