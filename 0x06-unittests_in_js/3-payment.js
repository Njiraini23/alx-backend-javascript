const utils = require('./utils');

module.exports = function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const total = utils.calculateNumber('SUM', totalAmount, totalShipping);
  consle.log(`The total is: ${total}`);
  return total;
};
