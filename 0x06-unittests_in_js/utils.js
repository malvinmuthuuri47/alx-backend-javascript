const utils = {
  calculateNumber(type, a, b) {
    if (typeof type !== 'string') {
      return 'Error: type must be a string';
    }

    const typeUpperCase = type.toUpperCase();

    if (typeUpperCase === 'SUM') {
      return Math.round(a) + Math.round(b);
    } if (typeUpperCase === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    } if (typeUpperCase === 'DIVIDE') {
      if (Math.round(b) !== 0) {
        return Math.round(a) / Math.round(b);
      }
      return 'Error';
    }
    return 'Error: Congratulations, you somehow found an edge case';
  },
};

module.exports = utils;
