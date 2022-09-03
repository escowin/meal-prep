// requirements
const inquirer = require("inquirer");
// const fs = require('fs');
// const generateMealPrep = require('./src/prep-template.js')

// fs.writeFile('./index.html', mealPrepData, err => {
//     if (err) throw new err;

//     console.log('meal prep generated, check out index.html');
// });

const mealPrepInfo = () => {
    console.log(`
    ==============
    Meal prep info
    ==============
    `);

    return inquirer.prompt([
        {
            type: "input",
            name: "date",
            message: "start date:",
            // **pause validation**
        },
        {
            type: "input",
            name: "duration",
            message: "duration:",
        },
        {
            type: "number",
            name: "weight",
            message: "starting lbs:",
        },
        {
          type: "number",
          name: "meals",
          message: "how many meals are in this prep?",
        },
    ]);
};

const mealPrompt = (mealPrepData) => {
    console.log(`
  ---------
  Meal info
  ---------
  `);


    //   mealPrepData.meals.meal.foodItem/portionSize
    //   creates meal array property if one doesn't exist
    if (!mealPrepData.meals) {
        mealPrepData.meals = [];
    }

    return inquirer
        .prompt([
            {
                type: "input",
                name: "foodItem",
                message: "enter food item",
            },
            {
                type: "input",
                name: "portionSize",
                message: "enter portion-size",
            },
            {
                type: "confirm",
                name: "addMoreFood",
                message: "add another food item to meal?",
                default: true,
            },
            {
                type: "confirm",
                name: "confirmAddMeal",
                message: "add another meal?",
                default: true,
            },
        ])
        // pushes meal data into mealPrepData.meals array
        .then(mealData => {
            mealPrepData.meals.push(mealData);
            // evaluates user response for adding more meals
            if (mealData.confirmAddMeal) {
                // if yes, calls mealPrompt() w/ mealPrepData included as argument to add data to now-existing array
                return mealPrompt(mealPrepData);
            } else {
                // if no, returns mealPrepData to then be used for meal prep template literal
                return mealPrepData;
            }
        });
};

const suppPrompt = () => {
    console.log("questions about supps")
    return inquirer.prompt([
        {
            type: "confirm",
            name: "nattyOrJuice",
            message: "natty?",
            default: true,
            // if false, stack question & supp
            // if true, supp
        }
    ])
};

const workoutPrompt = () => {
    console.log("workout questions")
    return inquirer.prompt([
        {
            type: "checkbox",
            name: "workout",
            message: "select workouts happening during this prep",
            choices: ["weightlifting", "cardio"]
        },
        {
            type: "input",
            name: "workoutSplit",
            message: "what's the split?",
            when: ({ workout }) => workout
        }
    ])
};

mealPrepInfo()
    .then(mealPrompt)
    .then(suppPrompt)
    .then(workoutPrompt)
    .then(mealPrepData => {
        console.log(mealPrepData);
    });

// ** prompt questions **
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
