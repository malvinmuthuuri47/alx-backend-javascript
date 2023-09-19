const { describe, it } = require('mocha')
const displayMessage = require('../0-console');

describe('Concatenate two strings', () => {
	it('should concatenate two strings', () => {
		const result = displayMessage("Hello", "world!");
	});
});
