const {
  sentenceCase,
  formatDuration,
  currentDate,
  arrayGen,
  formatDate,
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
  expect(formatDuration(0)).toEqual("0 weeks");
  expect(formatDuration(1)).toEqual("1 week");
  expect(formatDuration(2)).toEqual("2 weeks");
});

test("capitalized first letter of first word in string", () => {
  expect(sentenceCase("hi")).toEqual("Hi");
  expect(sentenceCase("hello there")).toEqual("Hello there");
});

test("reformats common date patterns into YYYY.MM.DD", () => {
  expect(formatDate("YYYY-MM-DD")).toEqual("YYYY.MM.DD");
  expect(formatDate("YYYY/MM/DD")).toEqual("YYYY.MM.DD");
});

test("calculates end date using start & duration (in weeks)", () => {
  expect(calculateEndDate("2022-01-01", 4)).toEqual("2022-01-29");
});
