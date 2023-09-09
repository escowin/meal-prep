const { currentDate } = require("../utils/helpers");

const questions = {
  prepQuestions: [
    {
      type: "input",
      name: "name",
      message: "enter prep name:",
      validate: (nameInput) => {
        if (!nameInput) {
          console.log("prep name required");
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "startDate",
      message: "enter start date:",
      default: currentDate(),
    },
    {
      type: "number",
      name: "duration",
      message: "how many weeks?",
    },
    {
      type: "number",
      name: "meals",
      message: "how many meals?",
      validate: (mealsInput) => {
        if (!mealsInput) {
          console.log("number of meals must be specified");
          return false;
        }
        return true;
      },
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
      message: "enter supplements:",
      validate: (input) => {
        if (!input) {
          console.log("supplements required");
          return false;
        }
        return true;
      },
      when: (answers) => answers.details.includes("supplements"),
    },
    {
      type: "input",
      name: "cardio",
      message: "enter cardio:",
      validate: (input) => {
        if (!input) {
          console.log("cardio required");
          return false;
        }
        return true;
      },
      when: (answers) => answers.details.includes("cardio"),
    },
    {
      type: "input",
      name: "split",
      message: "enter workout split:",
      validate: (input) => {
        if (!input) {
          console.log("workout split required");
          return false;
        }
        return true;
      },
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
      validate: (input) => {
        if (!input) {
          console.log("current weight required");
          return false;
        }
        return true;
      },
      when: (answers) => answers.details.includes("current weight"),
    },
  ],
  mealQuestion: [
    {
      type: "number",
      name: "num",
      message: "how many food items?",
      validate: (input) => {
        if (!input) {
          console.log("enter a valid number")
          return false;
        }
        return true;
      }
    }
  ],
  // foodQuestions: [
  //   {
  //     type: "input",
  //     name: "food",
  //     message: `add food item to meal`,
  //     validate: foodInput => {
  //       if (!foodInput) {
  //         console.log("food item required")
  //         return false;
  //       }
  //       return true;
  //     }
  //   },
  //   // {
  //   //   type: "confirm",
  //   //   name: "confirmAddFood",
  //   //   message: "add another food item?",
  //   // },
  // ]
};

module.exports = questions