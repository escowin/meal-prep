// requirements
const fs = require('fs');
const generateMealPrep = require('./src/prep-template.js')

// data.captures command line
const mealPrepData = process.argv.slice(2, process.argv.length);
const [date, duration] = mealPrepData;

fs.writeFile('index.html', generateMealPrep(date, duration), err => {
    if (err) throw new Error(err);
    console.log('meal prep generated as index.html');
});


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