const { capitalizeFirstLetter, formatDuration, getDate, arrayGen } = require("../utils/helpers")

test("returns date formatted as yyyy-mm-dd", () => {
    const date = new Date().toISOString();
    expect(getDate()).toEqual(date.split("T")[0])
})

test("meals value creates equal amount of empty array objects inside mealsArr", () => {
    const mealPrep = { meals: 3, mealsArr: []}
    arrayGen(mealPrep.meals, mealPrep.mealsArr) // pushes 3 empty arrays inside mealsArr (ie. [[], [], []])
    console.log(mealPrep)
    expect(mealPrep.mealsArr).toHaveLength(mealPrep.meals)
})