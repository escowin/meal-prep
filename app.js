const inquirer = require("inquirer");
// const fs = require('fs');

const questions = [
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
    }
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
    choices: ["supplements", "cardio", "workout split"]
  },
  {
    type: "input",
    name: "supps",
    message: "enter supp:",
    when: answers => answers.details.includes("supplements")
  },
  {
    type: "input",
    name: "cardio",
    message: "enter cardio:",
    when: answers => answers.details.includes("cardio")
  },
  {
    type: "input",
    name: "split",
    message: "enter workout split:",
    when: answers => answers.details.includes("workout split")
  }
]

const mockData = {
  name: 'test',
  startDate: '111',
  duration: 3,
  meals: 4,
  details: [ 'cardio', 'workout split' ],
  cardio: 'cardio',
  split: 'ppl'
}

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

  for (let i = 0; i < mockData.meals; i++) {
    mealPrompt(mockData)
  }
}


function mealPrompt(answers) {
  console.log(answers.meals)
}

// calls
init();