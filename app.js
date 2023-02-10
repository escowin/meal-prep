const inquirer = require("inquirer");
// const fs = require('fs');

const prepQuestions = [
  {
    type: "input",
    name: "name",
    message: "enter prep name:",
    validate: (nameInput) => {
      if (!nameInput) {
        console.log("enter prep name:");
        return false;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "startDate",
    message: "enter start date (yyyy.mm.dd):",
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
  },
  {
    type: "checkbox",
    name: "details",
    message: "select additional details to add:",
    choices: ["supplements", "cardio", "workout split"],
  },
  {
    type: "input",
    name: "supps",
    message: "enter supp:",
    when: (answers) => answers.details.includes("supplements"),
  },
  {
    type: "input",
    name: "cardio",
    message: "enter cardio:",
    when: (answers) => answers.details.includes("cardio"),
  },
  {
    type: "input",
    name: "split",
    message: "enter workout split:",
    when: (answers) => answers.details.includes("workout split"),
  },
];

const mealQuestions = [
  {
    type: "input",
    name: "meal",
    message: "add food item",
  },
  {
    type: "confirm",
    name: "continue",
    message: "add another food item?",
  },
];

const mockData = {
  name: "mock prep",
  startDate: "2023.02.08",
  duration: 3,
  meals: 4,
  details: ["cardio", "workout split"],
  cardio: "rowing/5x week",
  split: "chest/delts/back/arms/legs",
};

function init() {
  let date = new Date().getFullYear();
  console.log(`
  ·················································
  ·                                               ·
  ·               meal prep v0.1.2                ·
  ·            © ${date} edwin m. escobar            ·
  ·     https://github.com/escowin/meal-prep      ·
  ·                                               ·
  ·················································
  `);

  // inquirer.prompt(questions).then(answers => {
  //   for (let i = 0; i < answers.meals;  i++) {
  //     mealPrompt(answers)
  //   }
  // })

  // for (let i = 0; i < mockData.meals; i++) {
  //   mealPrompt(mockData)
  // }
  mealPrompt(mockData);
}

function mealPrompt(answers, index = 0) {

  // prepInfo object structure
  // - mealPrep is an array that holds objects equal to the meals key-value.
  // - each object holds a food array
  // - the array holds cli string objects
  // let prepInfo = {
  //   // other properties
  //   mealPrep: [
  //     { 
  //       food: [ 
  //         "food item 1",
  //         "food item 2",
  //       ],
  //     },
  //   ],
  // };
  // goal | meal.food

  // fix 
  // 1 push string values as one object into foodItems array.
  // 2 foodItems array should be pushed into object
  // 3 that object needs to be pushed into mealPrepArray
  if (index >= answers.meals) {
    console.log(answers);
    return;
  }

  inquirer.prompt(mealQuestions).then((mealAnswers) => {
    answers[`meal${index + 1}`] = mealAnswers.meal;
    if (mealAnswers.continue) {
      mealPrompt(answers, index + 1);
    } else {
      console.log(answers);
    }
  });
}

// calls
init();
