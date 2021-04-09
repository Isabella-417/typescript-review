const Kata = require('./solution').Kata;

test('Fixed Tests', () => {
    expect(Kata.highAndLow("1 2 3 4 5")).toBe("5 1");
    expect(Kata.highAndLow("1 2 -3 4 5")).toBe("5 -3");
    expect(Kata.highAndLow("1 9 3 4 -5")).toBe("9 -5");
});

