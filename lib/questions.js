const { calc, validate } = require("../utils/helpers");

const questions = {
  prepQ: [
    {
      type: "input",
      name: "name",
      message: "enter prep name:",
      validate: (input) => validate.data(input),
    },
    {
      type: "input",
      name: "goal",
      message: "enter prep goal:",
    },
    {
      type: "input",
      name: "startDate",
      message: "enter start date:",
      default: calc.today(),
    },
    {
      type: "number",
      name: "duration",
      message: "how many weeks?",
      validate: (num) => validate.num(num),
    },
    {
      type: "number",
      name: "mealNum",
      message: "how many meals?",
      validate: (num) => validate.range(num),
    },
    {
      type: "checkbox",
      name: "details",
      message: "select additional details to add:",
      choices: [
        "supplements",
        "cardio",
        "workout split",
        "cheat day",
        "current weight",
      ],
    },
    {
      type: "input",
      name: "supps",
      message: "enter supplement information:",
      validate: (input) => validate.data(input),
      when: (answers) => answers.details.includes("supplements"),
    },
    {
      type: "input",
      name: "cardio",
      message: "enter cardio:",
      validate: (input) => validate.data(input),
      when: (answers) => answers.details.includes("cardio"),
    },
    {
      type: "input",
      name: "split",
      message: "enter workout split:",
      validate: (input) => validate.data(input),
      when: (answers) => answers.details.includes("workout split"),
    },
    {
      type: "list",
      name: "cheatday",
      message: "select cheat day:",
      choices: [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ],
      when: (answers) => answers.details.includes("cheat day"),
    },
    {
      type: "input",
      name: "weight",
      message: "enter current weight:",
      validate: (input) => validate.data(input),
      when: (answers) => answers.details.includes("current weight"),
    },
  ],
  mealQ: [
    {
      type: "number",
      name: "num",
      message: "how many food items?",
      validate: (input) => validate.range(input),
    },
  ],
  foodQ: [
    {
      type: "input",
      name: "food",
      message: `enter food amount and item:`,
      validate: (input) => validate.data(input),
    },
  ],
};

module.exports = questions;
