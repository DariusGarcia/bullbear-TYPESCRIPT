import formatTime from '../formatTime';

describe('formatTime', () => {
  test('should format the date correctly', () => {
    const inputDate = '2023-01-23T00:00:00Z';
    const expectedOutput = 'Jan 22, 2023';
    const formattedDate = formatTime(inputDate);
    expect(formattedDate).toBe(expectedOutput);
  });
});
