const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const tC = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${tC}`);
};

module.exports = sendPaymentRequestToApi;
