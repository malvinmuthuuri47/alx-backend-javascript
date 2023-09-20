const { calculateNumber } = require('./utils');

function sendPaymentRequestToAPI(totalAmount, totalShipping) {
  const result = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToAPI;
