const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToAPI = require('./5-payment'); // Use 5-payment.js

describe('sendPaymentRequestToAPI', () => {
  let consoleLogSpy; // Declare the spy variable

  // Set up the spy before the tests
  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  // Clean up after the tests
  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct message for 100 and 20', () => {
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToAPI(totalAmount, totalShipping);

    // Verify that console.log is called with the correct message
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log the correct message for 10 and 10', () => {
    const totalAmount = 10;
    const totalShipping = 10;

    sendPaymentRequestToAPI(totalAmount, totalShipping);

    // Verify that console.log is called with the correct message
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
  });
});
