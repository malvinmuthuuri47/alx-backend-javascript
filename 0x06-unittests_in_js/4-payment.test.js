const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToAPI = require('./4-payment'); // Use 4-payment.js
const Utils = require('./utils');

describe('sendPaymentRequestToAPI', () => {
  let calculateNumberStub; // Declare the stub variable
  let consoleLogSpy; // Declare the spy variable

  // Set up the stub and spy before the tests
  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  // Clean up after the tests
  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with type SUM, a = 100, b = 20', () => {
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToAPI(totalAmount, totalShipping);

    // Verify that calculateNumberStub is called with the correct arguments
    expect(calculateNumberStub.calledWith('SUM', totalAmount, totalShipping)).to.be.true;
  });

  it('should log the correct message to the console', () => {
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToAPI(totalAmount, totalShipping);

    // Verify that console.log is called with the correct message
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
  });
});
