const inquirer = require("inquirer");
const { writeFile, copyFile } = require("./utils/generate-page");
const generateTemplate = require("./src/prep-template");
const { version } = require("./package.json");
const { prepQ, mealQ, foodQ } = require("./lib/questions");
const { mockPrep } = require("./lib/mockData");
const { arrayGen } = require("./utils/helpers");

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
  const prep = inquirer.prompt(prepQ)
  arrayGen(prep.meals, (prep.mealsArr = []));
  return prep;
};

const mealPrompt = async (prep) => {
  for (let i = 0; i < prep.mealsArr.length; i++) {
    console.log(`meal ${i + 1}`);
    // await ensures question is asked once per meal
    const answer = await inquirer.prompt(mealQ);
    // sets the initial key-values of this indexed object
    prep.mealsArr[i] = { num: answer.num, food: [] };
    await foodPrompt(prep, i);
  }

  console.log("all meals have been prepped");
  return prep;
};

const foodPrompt = async (prep, index) => {
  for (let i = 0; i < prep.mealsArr[index].num; i++) {
    // prompts the user to 'enter food item'
    const answer = await new Promise((resolve, reject) => {
      inquirer.prompt(foodQ).then(resolve).catch(reject);
    });
    // the 'answer.food' string value is then pushed into this indexed object's 'food' array
    prep.mealsArr[index].food.push(answer.food);
  }
  // this indexed object's food array should now contain an amount of (string) objects equal to this object's 'num' value
};

// calls | chaining .then() method for legibility
init()
  // .then(prepPrompt)
  // .then(mealPrompt)
  // .then((prep) => generateTemplate(prep))
  .then(() => generateTemplate(mockPrep))
  .then((template) => {
    return writeFile(template);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then((copyFileResponse) => console.log(copyFileResponse))
  .catch((err) => console.log(err));
