const isUpperCase = require('./solution').isUpperCase;

test('Fixed Tests', () => {
    expect(isUpperCase('c')).toBe(false);
    expect(isUpperCase('C')).toBe(true);
    expect(isUpperCase('hello I AM DONALD')).toBe(false);
    expect(isUpperCase('HELLO I AM DONALD')).toBe(true);
    expect(isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ')).toBe(false);
    expect(isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ')).toBe(true);
});
