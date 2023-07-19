// Test for empty string
test('stringLength throws an error for an empty string', () => {
    expect(() => stringLength('')).toThrow('String must be at least 1 character long.');
  });
  
  // Test for a string longer than 10 characters
  test('stringLength throws an error for a string longer than 10 characters', () => {
    expect(() => stringLength('ThisIsTooLong')).toThrow('String must not be longer than 10 characters.');
  });
  
  // Test for a valid string within the length range
  test('stringLength returns the correct character count for a valid string', () => {
    const inputString = 'ShortStr';
    const result = stringLength(inputString);
    expect(result).toBe(inputString.length);
  });
  