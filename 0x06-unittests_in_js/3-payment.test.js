const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const bBrother = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(bBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(bBrother.calculateNumber.callCount).to.be.equal(1);
    bBrother.calculateNumber.restore();
  });
});
