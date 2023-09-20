const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
	describe('when type is a string', () => {
		it('should return the correct result for SUM', () => {
			const result = calculateNumber('SUM', 5, 3);
			assert.strictEqual(result, 8);
		});


		it('should return the correct result for SUBTRACT', () => {
			const result = calculateNumber('SUBTRACT', 5, 3);
			assert.strictEqual(result, 2);
		});

		it('should return the correct result for divide', () => {
			const result = calculateNumber('DIVIDE', 6, 3);
			assert.strictEqual(result, 2);
		});
	});

	describe('when type is not a string', () => {
		it('should return an error message', () => {
			const result = calculateNumber(123, 5, 3);
			assert.strictEqual(result, 'Error: type must be a string');
		});
	});
});
