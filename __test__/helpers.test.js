const { capitalizeFirstWord, formatDuration, currentDate, arrayGen } = require("../utils/helpers")

test("returns date formatted as yyyy-mm-dd", () => {
    const date = new Date().toISOString();
    expect(currentDate()).toEqual(date.split("T")[0])
})

test("meals value creates equal amount of empty array objects inside mealsArr", () => {
    const mealPrep = { meals: 3, mealsArr: []}
    arrayGen(mealPrep.meals, mealPrep.mealsArr) // pushes 3 empty arrays inside mealsArr (ie. [[], [], []])
    expect(mealPrep.mealsArr).toHaveLength(mealPrep.meals)
})

test("correctly pluralizes week string", () => {
    expect(formatDuration(0)).toEqual("0 weeks")
    expect(formatDuration(1)).toEqual("1 week")
    expect(formatDuration(2)).toEqual("2 weeks")
})

test("capitalized first letter of first word in string", () => {
    expect(capitalizeFirstWord("hi")).toEqual("Hi")
    expect(capitalizeFirstWord("hello there")).toEqual("Hello there")
})