const Kata = require('./solution').Kata;

test('Fixed Tests', () => {
    expect(Kata.disemvowel("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!");
});

