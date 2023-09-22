const utils = require('./utils');

function sendPaymentRequestToAPI(totalAmount, totalShipping) {
  const result = utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToAPI;
