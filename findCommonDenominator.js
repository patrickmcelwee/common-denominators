const finder = (x, y) => {
  if (x === y) {
    return x;
  }
  if ((x * 2) === y) {
    return y;
  }
  return x * y;
};


const findCommonDenominator = (x, y) => finder(...[x, y].sort(
  (a, b) => {return a - b}
))

module.exports = findCommonDenominator;
