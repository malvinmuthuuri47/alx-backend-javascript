const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToAPI = require('./3-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToAPI', () => {
  it('should call utils.calculateNumber with correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const totalAmount = 100;
    const totalShipping = 20;
    sendPaymentRequestToAPI(totalAmount, totalShipping);
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    //expect(calculateNumberSpy).to.have.been.calledWith('SUM', 100, 20);

    // Reastore stub to its original state
    calculateNumberSpy.restore();
  });
});
