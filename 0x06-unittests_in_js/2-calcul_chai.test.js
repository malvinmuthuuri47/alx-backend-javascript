const assert = require('assert');
const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', () => {
	it('should return the sum of two rounded numbers when type is "SUM"', () => {
		const result = calculateNumber('SUM', 3.6, 2.4);
		expect(result).to.equal(6);
	});

	it('should return the difference of the two rounded numbers when type is "SUBTRACT"', () => {
		const result = calculateNumber('SUBTRACT', 5.5, 2.2);
		expect(result).to.equal(4);
	});

	it('should return the division of two rounded numbers when type is "DIVIDE" and b is not 0', () => {
		const result = calculateNumber('DIVIDE', 8.4, 2);
		expect(result).to.equal(4);
	});

	it('should return an error message when type is not a string', () => {
		const result = calculateNumber(123, 5.5, 2.2);
		expect(result).to.equal('Error: type must be a string');
	});

	it('should return an error message when dividing by 0', () => {
		const result = calculateNumber('DIVIDE', 5, 0);
		expect(result).to.equal('Error');
	});

	it('should return a default error message for an unknown type', () => {
		const result = calculateNumber('Unknown', 5, 2);
		expect(result).to.equal('Error: Congratulations, you somehow found an edge case');
	});
});
