const sinon = require('sinon');
const utils = require('./utils');
const { sendPaymentRequestToAPI } = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;

  beforeEach(() => {
    // Create a spy for the utils.calculateNumber function
    calculateNumberSpy = sinon.spy(utils, 'calculateNumber');
  });

  afterEach(() => {
    // Restore the spy after each test to prevent side effects
    calculateNumberSpy.restore();
  });

  it('should call utils.calculateNumber with type "SUM", totalAmount, and totalShipping', () => {
    sendPaymentRequestToAPI(100, 20);
    // Check if utils.calculateNumber was called with expected args
    sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);
  });

  it('should return the result obtained from utils.calculateNumber', () => {
    // Set up the spy to return a specific value when called
    calculateNumberSpy.returns(120);
    const result = sendPaymentRequestToAPI(100, 20);

    // Check if the result matches the expected value
    sinon.assert.match(result, 120);
  });
});
