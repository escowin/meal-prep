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
  // const prep = inquirer.prompt(prepQ)
  const prep = mockPrep;
  arrayGen(prep.meals, (prep.mealsArr = []));
  return prep;
};

const mealPrompt = async (prep) => {
  for (let i = 0; i < prep.mealsArr.length; i++) {
    console.log(`meal ${i + 1}`);
    // await ensures question is asked once per meal
    const answer = await inquirer.prompt(mealQ);
    prep.mealsArr[i] = { num: answer.num, food: [] };
    foodPrompt(prep, i);
  }

  console.log("all meals have been prepped");
};

const foodPrompt = async (prep, index) => {
  console.log(`
  current: prep.mealsArr[${index}] { num: ${prep.mealsArr[index].num}, food: [] }
  - prompt 'enter food item' x${prep.mealsArr[index].num} bc 'num'
  - push answers into this object's 'food' array
  - then move on to the next indexed object, mealsArr[${index+1}]]
  `)


  // for (let i = 0; i < prep.mealsArr[index].num; i++) {
  //   console.log(prep.mealsArr[index].num)
  //   // const answer = await inquirer.prompt(foodQ);
  //   // console.log(answer);
  // }

  // const lastMeal = prepInfo.mealPrep[prepInfo.mealPrep.length - 1];
  // const mealCount = prepInfo.mealPrep.length;

  // return inquirer.prompt(mealLength).then((answers) => {
  //   console.log(answers);
  //   const foodCount = answers.mealLength;

  //   for (let i = 0; i < foodCount; i++) {
  //     console.log(`meal prep`);
  //     return inquirer.prompt(mealQs).then((foodAnswers) => {
  //       lastMeal.food.push(foodAnswers.food);
  //       if (i < foodCount - 1) {
  //         return foodPrompt(prepInfo);
  //       }
  //       if (prepInfo.meals > mealCount) {
  //         prepInfo.mealPrep.push({
  //           food: [],
  //         });
  //         return foodPrompt(prepInfo);
  //       }
  //       return prepInfo;
  //     });
  //   }
  // });
  // return inquirer.prompt(mealQs).then((answers) => {
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
init().then(prepPrompt).then(mealPrompt);
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
