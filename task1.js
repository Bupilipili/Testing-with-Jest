function stringLength(string) {
    const length = string.length;
  
    if (length === 0) {
      throw new Error('String must be at least 1 character long.');
    }
  
    if (length > 10) {
      throw new Error('String must not be longer than 10 characters.');
    }
  
    return length;
  }
  
  // Export the function for testing purposes (if using modules)
  // module.exports = stringLength;
  