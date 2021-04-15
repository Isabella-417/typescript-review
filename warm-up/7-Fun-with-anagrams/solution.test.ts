const funWithAnagrams = require('./solution').funWithAnagrams;


test('Case 1', () => {
    expect(funWithAnagrams(["tea", "ate", "anagram", "eat", "gramaan"])).toEqual(["anagram", "tea"]);
});

test('Case 2', () => {
    expect(funWithAnagrams(["code", "doce", "ecod", "framer", "frame"])).toEqual(["code", "frame", "framer"]);
});


