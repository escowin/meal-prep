const inquirer = require("inquirer");

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

const init = () => {
  let date = new Date().getFullYear();
  // returns a string via promise object
  return Promise.resolve(`
  ·················································
  ·                                               ·
  ·               meal prep v0.1.2                ·
  ·            © ${date} edwin m. escobar            ·
  ·     https://github.com/escowin/meal-prep      ·
  ·                                               ·
  ·················································
  `);
};

const prepPrompt = () => {
  return prepPromptMockData;
  // return inquirer.prompt([
  //   {
  //     type: "input",
  //     name: "name",
  //     message: "enter prep name:",
  //     validate: (nameInput) => {
  //       if (!nameInput) {
  //         console.log("enter prep name:");
  //         return false;
  //       }
  //       return true;
  //     },
  //   },
  //   {
  //     type: "input",
  //     name: "startDate",
  //     message: "enter start date (yyyy.mm.dd):",
  //   },
  //   {
  //     type: "number",
  //     name: "duration",
  //     message: "how many weeks?",
  //   },
  //   {
  //     type: "number",
  //     name: "meals",
  //     message: "how many meals?",
  //   },
  //   {
  //     type: "checkbox",
  //     name: "details",
  //     message: "select additional details to add:",
  //     choices: ["supplements", "cardio", "workout split"],
  //   },
  //   {
  //     type: "input",
  //     name: "supps",
  //     message: "enter supp:",
  //     when: (answers) => answers.details.includes("supplements"),
  //   },
  //   {
  //     type: "input",
  //     name: "cardio",
  //     message: "enter cardio:",
  //     when: (answers) => answers.details.includes("cardio"),
  //   },
  //   {
  //     type: "input",
  //     name: "split",
  //     message: "enter workout split:",
  //     when: (answers) => answers.details.includes("workout split"),
  //   },
  // ]);
};

// this function needs to repeat equal to the meals key-value (ex. 'meals: 3', this function repeats three times so that there will ultimately be three objects within the mealPrep array)
const initMealPrep = (prepInfo) => {
  if (!prepInfo.mealPrep) {
    prepInfo.mealPrep = [];
  }

  for (let i = 0; i < prepInfo.meals; i++) {
    console.log(`
    ·················································
    ·                   meal prep                   ·
    ·················································
    `);

    prepInfo.mealPrep.push({
      food: []
    });

    if (i < prepInfo.meals - 1) {
      prepInfo = foodPrompt(prepInfo);
    }
  }

  return prepInfo;
};

// this function repeats if confirmAddFood key-value is true.
const foodPrompt = (prepInfo) => {
  const lastMeal = prepInfo.mealPrep[prepInfo.mealPrep.length - 1];
  const mealCount = prepInfo.mealPrep.length;
  
  const questions = [
    {
      type: "input",
      name: "food",
      message: `add food item for meal #${mealCount}`,
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

// calls
init()
  .then(prepPrompt)
  .then(initMealPrep)
  .then(foodPrompt)
  .then((data) => {
    console.log(data);
    console.log(data.mealPrep);
  });
