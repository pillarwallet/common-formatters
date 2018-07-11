const formatters = require('../lib/formatters');

describe('formatters', () => {
  describe('#phone', () => {
    const { phone } = formatters;

    it('is a function', () => {
      expect(typeof phone).toBe('function');
    });

    it('accepts one argument', () => {
      expect(phone).toHaveLength(1);
    });

    it('returns a string containing only numbers prefixed with a plus sign', () => {
      expect(phone(' +44(7979).12-34,56 ')).toBe('+447979123456');
    });

    it('returns the original value when an empty string', () => {
      expect(phone('')).toBe('');
    });

    it('returns the original value when not a string', () => {
      const obj = { foo: 'bar' };

      expect(phone(obj)).toBe(obj);
      expect(phone(null)).toBe(null);
      expect(phone(undefined)).toBe(undefined);
    });
  });
});
