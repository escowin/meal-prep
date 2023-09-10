const inquirer = require("inquirer");
const { writeFile, copyFile } = require("./utils/generate-page");
const generateTemplate = require("./src/prep-template");
const { version } = require("./package.json");
const { prepQ, mealQ, foodQ } = require("./lib/questions");
const { arrayGen, year, formatNum } = require("./utils/helpers");
const { mockPrep } = require("./lib/mockData")

// logic
const init = () => {
  // returns a string via promise object
  return Promise.resolve(
    console.log(`
    ·················································
    ·                                               ·
    ·               meal-prep v${version}                ·
    ·            © ${year} edwin m. escobar            ·
    ·     https://github.com/escowin/meal-prep      ·
    ·                                               ·
    ·················································
  `)
  );
};

const prepPrompt = () => {
  const prep = inquirer.prompt(prepQ)
  return prep;
};

const mealPrompt = async (data) => {
  let prep = data
  prep.meals = []
  arrayGen(prep.mealNum, prep.meals);

  for (let i = 0; i < prep.mealNum; i++) {
    console.log(`
    ·················································
    ·                    meal ${formatNum(i + 1)}                    ·
    ·················································
    `);
    // await ensures question is asked once per meal
    const answer = await inquirer.prompt(mealQ);
    // sets the initial key-values of this indexed object
    prep.meals[i] = { num: answer.num, food: [] };
    await foodPrompt(prep, i);
  }

  console.log("all meals have been prepped");
  return prep;
};

const foodPrompt = async (prep, index) => {
  for (let i = 0; i < prep.meals[index].num; i++) {
    // prompts the user to 'enter food item'
    const answer = await new Promise((resolve, reject) => {
      inquirer.prompt(foodQ).then(resolve).catch(reject);
    });
    // the 'answer.food' string value is then pushed into this indexed object's 'food' array
    prep.meals[index].food.push(answer.food);
  }
  // this indexed object's food array should now contain an amount of (string) objects equal to this object's 'num' value
};

// calls | chaining .then() method for legibility
init()
  .then(prepPrompt)
  .then(mealPrompt)
  .then(generateTemplate)
  .then(writeFile)
  .then((writeFileResponse) => console.log(writeFileResponse))
  .then(copyFile)
  .then((copyFileResponse) => console.log(copyFileResponse))
  .catch((err) => console.error(err));
