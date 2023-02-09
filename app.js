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
    name: "sups",
    message: "enter supp:",
    when: answers => answers.details.includes("supplements")
  }
]

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

  inquirer.prompt(questions).then(answers => {
    console.log(answers);
  })
}


// calls
init();