const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentequestToAPI = require('./4-payment');
const utils = require('./utils');
const sendPaymentRequestToAPI = require('./4-payment');

describe('sendPaymentRequestToAPI', () => {
    let calculateNumberStub;

    beforeEach(() => {
        calculateNumberStub = sinon.stub(utils, 'calculateNumber').returns(10);
    });

    afterEach(() => {
        calculateNumberStub.restore();
    });

    it('should call utils.calculateNumber with correct arguments', () => {
        const totalAmount = 100;
        const totalShipping = 20;
        sendPaymentRequestToAPI(totalAmount, totalShipping);
        expect(calculateNumberStub.calledWith('SUM', totalAmount, totalShipping)).to.be.true;
    });

    it('should log the correct message to the console', () => {
        const totalAmount = 100;
        const totalShipping = 20;
        const consoleLogSpy = sinon.spy(console, 'log');
        sendPaymentRequestToAPI(totalAmount, totalShipping);
        expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

        consoleLogSpy.restore();
    });
});
