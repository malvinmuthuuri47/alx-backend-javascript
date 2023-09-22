const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToAPI = require('./3-payment');
const utils = require('./utils');

describe('sendPaymentequestToAPI', () => {
    before(() => {
        calculateNumberSpy = sinon.spy(utils, 'calculateNumber');
    });

    after(() => {
        utils.calculateNumber.restore();
    })
  
  it('should call utils.calculateNumber with correct args', () => {
    const totalAmount = 100;
    const totalShipping = 20;
    sendPaymentRequestToAPI(totalAmount, totalShipping);

    const firstCall = calculateNumberSpy.getCall(0);

    const args = firstCall.args;

    console.log('Arguments received by the spy: ', args);

    assert(calculateNumberSpy.calledWith('SUM', totalAmount, totalShipping));
  });
});
