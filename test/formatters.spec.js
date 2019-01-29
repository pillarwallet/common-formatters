/*
Copyright (C) 2019 Stiftung Pillar Project

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
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
