const recursiveFinder = (originalX, originalY, currentX, currentY) => {
  //  If they are equal, we already have our answer!
  if (currentX === currentY) { return currentX };

  // one is a multiple of the other :-)
  if ((currentY % currentX) === 0) {
    return currentY;
  }

  const newX = currentX + originalX;
  if (newX <= currentY) {
    return recursiveFinder(originalX, originalY, newX, currentY);
  } else {
    return recursiveFinder(originalY, originalX, currentY, newX);
  }

  // Worst possible case, just multiply em
  // TODO: remove!
  return originalX * originalY;
};

const finder = (x, y) => {
  return recursiveFinder(x, y, x, y);
};

const findCommonDenominator = (...denominators) => {
  return denominators.reduce((previous, current) => {
    return finder(...[previous, current].sort(
      (a, b) => {return a - b}
    ));
  })
}

module.exports = findCommonDenominator;
