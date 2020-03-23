const finder = (x, y) => {
  if (x === y) {
    return x;
  }

  if ((y % x) === 0) {
    return y;
  }

  return x * y;
};


const findCommonDenominator = (x, y) => finder(...[x, y].sort(
  (a, b) => {return a - b}
))

module.exports = findCommonDenominator;
