const reverseNumber = require('./solution').reverseNumber;


test('Case 1', () => {
    expect(reverseNumber(123)).toEqual(321);
});

test('Case 2', () => {
    expect(reverseNumber(-123)).toEqual(-321);
});

test('Case 3', () => {
    expect(reverseNumber(5)).toEqual(5);
});

test('Case 4', () => {
    expect(reverseNumber(0)).toEqual(0);
});

test('Case 5', () => {
    expect(reverseNumber(4321234)).toEqual(4321234);
});

test('Case 6', () => {
    expect(reverseNumber(98989898)).toEqual(89898989);
});

