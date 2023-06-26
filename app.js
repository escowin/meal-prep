const inquirer = require("inquirer");
const { writeFile, copyFile } = require("./utils/generate-page");
const generateTemplate = require("./src/prep-template");
const { version } = require("./package.json");
const { prepQuestions, mealQuestions } = require("./lib/questions");

// logic
const init = () => {
  let date = new Date().getFullYear();
  // returns a string via promise object
  return Promise.resolve(
    console.log(`
    ·················································
    ·                                               ·
    ·               meal prep v${version}                ·
    ·            © ${date} edwin m. escobar            ·
    ·     https://github.com/escowin/meal-prep      ·
    ·                                               ·
    ·················································
  `)
  );
};

const prepPrompt = () => {
  return inquirer.prompt(prepQuestions);
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
      food: [],
    });

    // returns updated prepInfo object once the index value matches the amount of meals in the prep
    if ((i = prepInfo.meals - 1)) {
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

  return inquirer.prompt(mealQuestions).then((answers) => {
    lastMeal.food.push(answers.food);

    if (answers.confirmAddFood) {
      return foodPrompt(prepInfo);
    }

    if (prepInfo.meals > mealCount) {
      prepInfo.mealPrep.push({
        food: [],
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
    return generateTemplate(prepInfo);
  })
  .then((template) => {
    return writeFile(template);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then((copyFileResponse) => console.log(copyFileResponse))
  .catch((err) => console.log(err));
