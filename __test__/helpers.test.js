const {
  format,
  currentDate,
  arrayGen,
  calculateEndDate,
} = require("../utils/helpers");

test("returns date formatted as yyyy-mm-dd", () => {
  const date = new Date().toISOString();
  expect(currentDate()).toEqual(date.split("T")[0]);
});

test("meals value creates equal amount of empty array objects inside mealsArr", () => {
  const mealPrep = { meals: 3, mealsArr: [] };
  arrayGen(mealPrep.meals, mealPrep.mealsArr); // pushes 3 empty arrays inside mealsArr (ie. [[], [], []])
  expect(mealPrep.mealsArr).toHaveLength(mealPrep.meals);
});

test("correctly pluralizes week string", () => {
  expect(format.duration(0)).toEqual("0 weeks");
  expect(format.duration(1)).toEqual("1 week");
  expect(format.duration(2)).toEqual("2 weeks");
});

test("capitalized first letter of first word in string", () => {
  expect(format.sentence("hi")).toEqual("Hi");
  expect(format.sentence("hello there")).toEqual("Hello there");
});

test("reformats common date patterns into YYYY.MM.DD", () => {
  expect(format.date("YYYY-MM-DD")).toEqual("YYYY.MM.DD");
  expect(format.date("YYYY/MM/DD")).toEqual("YYYY.MM.DD");
});

test("calculates end date using start & duration (in weeks)", () => {
  expect(calculateEndDate("2022-01-01", 4)).toEqual("2022-01-29");
});

test("formats single digits with 0 placeholder", () => {
  expect(format.num(1)).toEqual("01");
  expect(format.num(10)).toEqual(10);
});
