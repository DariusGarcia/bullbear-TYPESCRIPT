import capitalizeFirstLetter from '../capitalizeFirstLetter';

describe('capitalizeFirstLetter', () => {
  test('should capitalize the first letter of a string', (): void => {
    const result: string = capitalizeFirstLetter('hello');
    expect(result).toBe('Hello');
  });

  test('should return an empty string if passed an empty string', (): void => {
    const result: string = capitalizeFirstLetter('');
    expect(result).toBe('');
  });

  test('should return the same string if it already starts with an uppercase letter', (): void => {
    const result: string = capitalizeFirstLetter('Hello');
    expect(result).toBe('Hello');
  });
});
