const { calc, format } = require("../utils/helpers");

// calc helpers
test("meals value creates equal amount of empty array objects inside mealsArr", () => {
  const mealPrep = { meals: 3, mealsArr: [] };
  calc.arrays(mealPrep.meals, mealPrep.mealsArr); // pushes 3 empty arrays inside mealsArr (ie. [[], [], []])
  expect(mealPrep.mealsArr).toHaveLength(mealPrep.meals);
});

test("calculates end date using start & week duration", () => {
  expect(calc.endDate("2022-01-01", 4)).toEqual("2022-01-29");
});

test("returns current yyyy-mm-dd date", () => {
  const date = new Date().toISOString();
  expect(calc.today()).toEqual(date.split("T")[0]);
});

test("returns current year", () => {
  const year = new Date().getFullYear();
  expect(calc.year()).toEqual(year);
});

// format helpers
test("reformats common date patterns into YYYY.MM.DD", () => {
  expect(format.date("YYYY-MM-DD")).toEqual("YYYY.MM.DD");
  expect(format.date("YYYY/MM/DD")).toEqual("YYYY.MM.DD");
});

test("correctly pluralizes 'week' based on num value", () => {
  expect(format.duration(0)).toEqual("0 weeks");
  expect(format.duration(1)).toEqual("1 week");
  expect(format.duration(2)).toEqual("2 weeks");
});

test("formats single digits with 0 placeholder", () => {
  expect(format.num(1)).toEqual("01");
  expect(format.num(10)).toEqual(10);
});

test("capitalizes first letter of sentence string", () => {
  expect(format.sentence("hi")).toEqual("Hi");
  expect(format.sentence("hello there")).toEqual("Hello there");
});