// requirements
const inquirer = require("inquirer");
// const fs = require('fs');
// const generateMealPrep = require('./src/prep-template.js')

// // data.captures command line
// const mealPrepData = generateMealPrep(date, duration);

// fs.writeFile('./index.html', mealPrepData, err => {
//     if (err) throw new err;

//     console.log('meal prep generated, check out index.html');
// });

inquirer
  .prompt([
    {
      type: "input",
      name: "date",
      message: "when does the prep start?",
    },
    {
      type: "input",
      name: "duration",
      message: "what's the duration of the prep?",
    },
  ])
  .then((answers) => console.log(answers));

// ** prompt questions **
// meal prep start date?
// meal prep duration?
// how many meals?
// - amount of meal prompts is based on above answer
// enter food item
// enter portion size
// would you like to add another food item?
//  - if yes, repeat. else continue to next meal
//  -- next meal repeats previous food item & portion size prompts
// would you like to add supps?
// workouts?
// enter workout
// enter split

// const newMealPrep = function() {
//     console.log(`
//     =============================================
//     this is where meal prep details will be asked
//     =============================================`)
// };

// newMealPrep();
