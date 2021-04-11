const getStrings = require('./solution').getStrings;

test('Case 1', () => {
    expect(getStrings("Chicago")).toEqual("c:**,h:*,i:*,a:*,g:*,o:*");
});

test('Case 2', () => {
    expect(getStrings("Bangkok")).toEqual("b:*,a:*,n:*,g:*,k:**,o:*");
});

test('Case 3', () => {
    expect(getStrings("Las Vegas")).toEqual("l:*,a:**,s:**,v:*,e:*,g:*");
});