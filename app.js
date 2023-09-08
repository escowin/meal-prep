const inquirer = require("inquirer");
const { writeFile, copyFile } = require("./utils/generate-page");
const generateTemplate = require("./src/prep-template");
const { version } = require("./package.json");
const { prepQuestions, mealQuestions, foodQuestions } = require("./lib/questions");

// logic
const init = () => {
  let date = new Date().getFullYear();
  // returns a string via promise object
  return Promise.resolve(console.log(`
    ·················································
    ·                                               ·
    ·               meal prep v${version}                ·
    ·            © ${date} edwin m. escobar            ·
    ·     https://github.com/escowin/meal-prep      ·
    ·                                               ·
    ·················································
  `));
};

const prepPrompt = () => {
  return inquirer.prompt(prepQuestions);
};

const mealPrepPrompt = (prepInfo) => {
  console.log(prepInfo)
  // initializes the mealPrep array on the first pass
  if (!prepInfo.mealPrep) {
    prepInfo.mealPrep = [];
  }
  console.log(prepInfo)

  // loops through equal to the amount of meals in the prep
  for (let i = 0; i < prepInfo.meals; i++) {
    console.log(`
    ·················································
    ·                   meal prep                   ·
    ·················································
    `);

    // pushes an object with a food array into meal prep
    prepInfo.mealPrep.push({ food: [] });

    // returns updated prepInfo object once the index value matches the amount of meals in the prep
    // (i = prepInfo.meals - 1) ? prepInfo : (prepInfo = foodPrompt(prepInfo));

    return prepInfo;
  }
};

const foodPrompt = (prepInfo) => {
  console.log(prepInfo)
  const lastMeal = prepInfo.mealPrep[prepInfo.mealPrep.length - 1];
  const mealCount = prepInfo.mealPrep.length;

  return inquirer.prompt(mealLength).then((answers) => {
    console.log(answers)
    const foodCount = answers.mealLength;

    for (let i = 0; i < foodCount; i++) {
      console.log(`meal prep`);
      return inquirer.prompt(mealQuestions).then((foodAnswers) => {
        lastMeal.food.push(foodAnswers.food);
        if (i < foodCount - 1) {
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
    }
  });
  // return inquirer.prompt(mealQuestions).then((answers) => {
  //   lastMeal.food.push(answers.food);

  //   if (answers.confirmAddFood) {
  //     return foodPrompt(prepInfo);
  //   }

  //   if (prepInfo.meals > mealCount) {
  //     prepInfo.mealPrep.push({
  //       food: [],
  //     });
  //     return foodPrompt(prepInfo);
  //   }

  //   return prepInfo;
  // });
};

// calls | chaining .then() method for legibility
init()
  .then(prepPrompt)
  // .then(initMealPrep)
  // .then(foodPrompt)
  // .then((prepInfo) => {
  //   return generateTemplate(prepInfo);
  // })
  // .then((template) => {
  //   return writeFile(template);
  // })
  // .then((writeFileResponse) => {
  //   console.log(writeFileResponse);
  //   return copyFile();
  // })
  // .then((copyFileResponse) => console.log(copyFileResponse))
  // .catch((err) => console.log(err));
