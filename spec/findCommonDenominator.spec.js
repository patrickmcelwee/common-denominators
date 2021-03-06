describe('findCommonDenominator', () => {
  const findCommonDenominator = require('../findCommonDenominator');

  it('works for 5 and 10', () => {
    expect(
      findCommonDenominator(5, 10)
    ).toEqual(10);
  });

  it('works for 1 and 1', () => {
    expect(
      findCommonDenominator(1, 1)
    ).toEqual(1);
  });

  it('works for 2 and 4', () => {
    expect(
      findCommonDenominator(2, 4)
    ).toEqual(4);
  });

  it('works for 4 and 2', () => {
    expect(
      findCommonDenominator(4, 2)
    ).toEqual(4);
  });

  it('works for 10 and 5', () => {
    expect(
      findCommonDenominator(10, 5)
    ).toEqual(10);
  });

  it('works for 16 and 8', () => {
    expect(
      findCommonDenominator(16, 8)
    ).toEqual(16);
  });

  it('works for 8 and 3', () => {
    expect(
      findCommonDenominator(8, 3)
    ).toEqual(24);
  });

  it('works for 2 and 6', () => {
    expect(
      findCommonDenominator(2, 6)
    ).toEqual(6);
  });

  it('works for 2 and 8 ', () => {
    expect(
      findCommonDenominator(2, 8)
    ).toEqual(8);
  });

  it('works for 15 and 10', () => {
    expect(
      findCommonDenominator(15, 10)
    ).toEqual(30);
  });

  it('works for 6, 3, 9', () => {
    expect(
      findCommonDenominator(6, 3, 9)
    ).toEqual(18);
  });

  it('performs reasonably for big number', () => {
    expect(
      findCommonDenominator(10000000000000000000000, 2)
    ).toEqual(10000000000000000000000);
  });
});
