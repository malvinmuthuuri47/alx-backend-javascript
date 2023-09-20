const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { expect } = require('chai');

describe('calculateNumber,', () => {
	it('should test the rounding of a', () => {
		const result = calculateNumber(4.2, 3.2);
		expect(result).to.equal(7);
	});

	it('should add two positive numbers correctly', () => {
		const result = calculateNumber(3.8, 5);
		assert.strictEqual(result, 9);
	});

	it('should add a positive and a negative number correctly', () => {
		const result = calculateNumber(10, -3);
		assert.strictEqual(result, 7);
	});

	it('should add two negative numbers correctly', () => {
		const result = calculateNumber(-8, -4);
		assert.strictEqual(result, -12);
	});
});
