const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalCt = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalCt}`);
};

module.exports = sendPaymentRequestToApi;
