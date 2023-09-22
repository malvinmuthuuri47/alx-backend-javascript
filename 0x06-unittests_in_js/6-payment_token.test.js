const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
    it('should resolve with a success message when success is true', (done) => {
        getPaymentTokenFromAPI(true)
        .then((result) => {
            // Add assertions here
            expect(result).to.deep.equal({ data: 'Successful response from the API' });
            done();
        })
        .catch((error) => {
            done(error);
        });
    });

    it('should resolve with undefined when success is false', (done) => {
        getPaymentTokenFromAPI(false)
        .then((result) => {
            // Add assertions here
            expect(result).to.be.undefined;
            done();
        })
        .catch((error) => {
            done(error);
        });
    });
})
