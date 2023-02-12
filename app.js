const inquirer = require("inquirer");
const { writeFile, copyFile } = require('./utils/generate-page');
const generateTemplate = require("./src/prep-template");

const mockData = {
  name: "mock prep",
  startDate: "2023.02.08",
  duration: 3,
  meals: 3,
  details: ["cardio", "workout split"],
  cardio: "rowing/5x week",
  split: "chest/delts/back/arms/legs",
  mealPrep: [
    {
      food: ["1 egg", "1/2 cup egg whites", "1oz oats"],
    },
    {
      food: ["5oz chicken", "3oz mixed vegies"],
    },
    {
      food: ["1.8oz protein powder, 1 tbsp peanut butter"],
    },
    {
      food: ["6oz white meat", "3oz veggies", "5oz rice"],
    },
  ],
};

const prepPromptMockData = {
  name: "mock prep",
  startDate: "2023.02.08",
  duration: 3,
  meals: 3,
  details: ["cardio", "workout split"],
  cardio: "rowing/5x week",
  split: "chest/delts/back/arms/legs",
};

// logic
const init = () => {
  let date = new Date().getFullYear();
  // returns a string via promise object
  return Promise.resolve(`
  ·················································
  ·                                               ·
  ·               meal prep v1.0.0                ·
  ·            © ${date} edwin m. escobar            ·
  ·     https://github.com/escowin/meal-prep      ·
  ·                                               ·
  ·················································
  `);
};

const prepPrompt = () => {
  return inquirer.prompt([
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
  ]);
};

const initMealPrep = (prepInfo) => {
  // initializes the mealPrep array on the first pass
  if (!prepInfo.mealPrep) {
    prepInfo.mealPrep = [];
  }

  // loops through equal to the amount of meals in the prep
  for (let i = 0; i < prepInfo.meals; i++) {
    console.log(`
    ·················································
    ·                   meal prep                   ·
    ·················································
    `);

    // pushes an object with a food array into meal prep
    prepInfo.mealPrep.push({
      food: []
    });

    // returns updated prepInfo object once the index value matches the amount of meals in the prep
    if (i = prepInfo.meals - 1) {
      return prepInfo;
    } else if (i < prepInfo.meals - 1) {
      // if less than that, the food prompt is called to add to prepInfo 
      prepInfo = foodPrompt(prepInfo);
    }
  }

  return prepInfo;
};

const foodPrompt = (prepInfo) => {
  const lastMeal = prepInfo.mealPrep[prepInfo.mealPrep.length - 1];
  const mealCount = prepInfo.mealPrep.length;
  
  const questions = [
    {
      type: "input",
      name: "food",
      message: `add food item for meal #${mealCount}:`,
    },
    {
      type: "confirm",
      name: "confirmAddFood",
      message: "add another food item?",
    },
  ];

  return inquirer.prompt(questions)
    .then((answers) => {
      lastMeal.food.push(answers.food);

      if (answers.confirmAddFood) {
        return foodPrompt(prepInfo);
      }

      if (prepInfo.meals > mealCount) {
        prepInfo.mealPrep.push({
          food: []
        });
        return foodPrompt(prepInfo);
      }

      return prepInfo;
    });
};

// calls | chaining .then() method for legibility 
init()
  .then(prepPrompt)
  .then(initMealPrep)
  .then(foodPrompt)
  .then((prepInfo) => {
    return generateTemplate(prepInfo)
  })
  .then(template => {
    return writeFile(template)
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse)
    return copyFile();
  })
  .then(copyFileResponse => console.log(copyFileResponse))
  .catch(err => console.log(err));
