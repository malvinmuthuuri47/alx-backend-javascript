const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber,', () => {
	it('should add two positive numbers correctly', () => {
		const result = calculateNumber(3, 5);
		assert.strictEqual(result, 8);
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
