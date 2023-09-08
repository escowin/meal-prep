const { capitalizeFirstLetter, formatDuration, getDate } = require("../utils/helpers")

test("returns date formatted as yyyy-mm-dd", () => {
    const date = new Date().toISOString();
    console.log(date.split("T")[0])
    expect(getDate()).toEqual(date.split("T")[0])
})