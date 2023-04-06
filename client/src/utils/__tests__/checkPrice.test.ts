import checkPrice from '../checkPrice';

describe('checkPrice', () => {
  test('returns green if daily % change is greater than zero', () => {
    const stockData = [{ changesPercentage: 1 }];
    const result = checkPrice(stockData);
    expect(result).toEqual(['rgba(0, 255, 0, 1)']);
  });

  test('returns red if daily % change is less than zero', () => {
    const stockData = [{ changesPercentage: -1 }];
    const result = checkPrice(stockData);
    expect(result).toEqual(['rgba(255, 0, 0, 1)']);
  });

  test('returns red if daily % change is zero', () => {
    const stockData = [{ changesPercentage: 0 }];
    const result = checkPrice(stockData);
    expect(result).toEqual(['rgba(255, 0, 0, 1)']);
  });
});
