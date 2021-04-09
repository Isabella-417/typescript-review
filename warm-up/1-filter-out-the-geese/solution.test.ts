const gooseFilter = require('./solution').gooseFilter;
const goose = require('./solution');

test('Mixed list', () => {
  expect(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])).toEqual(["Mallard", "Hook Bill", "Crested", "Blue Swedish"])
});

test('Mixed list', () => {
  expect(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])).toEqual(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
});

test('All geese', () => {
  expect(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])).toEqual([])
});