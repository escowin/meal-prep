// requirements
const inquirer = require("inquirer");
// const fs = require('fs');
// const generateMealPrep = require('./src/prep-template.js')

// fs.writeFile('./index.html', mealPrepData, err => {
//     if (err) throw new err;

//     console.log('meal prep generated, check out index.html');
// });

const mealPrepData = [];

const questions = [
    {}
]

const mealPrepInfo = () => {
    console.log(`
    ===========================================
    =           Meal prep generator           =
    ===========================================
    `);

    return inquirer.prompt([
        {
            type: "input",
            name: "date",
            message: "start date:",
            validate: (answer) => {
                if (answer === '') {
                    return "enter start date"
                }
                return true
            }
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
          validate: (answer) => {
            if(isNaN(answer)) {
                return "enter a valid number"
            }
            return true
          }
        },
    ]);
};

const mealOnePrompt = () => {
    if (mealPrepData[0].meals < 1) {
        console.log(`
        no food? no prep.
        `);
        return
    }

    console.log(`
    ::: Meal one :::
    `)

    if (!mealPrepData[0].mealOne) {
        mealPrepData[0].mealOne = []
    }

    return inquirer.prompt([
        {
            type: "input",
            name: "food",
            message: "enter food item:"
        },
        {
            type: "confirm",
            name: "confirmMoreFood",
            message: "would you like to add more food to this meal?",
            default: false,
        },
    ])
    .then(foodData => {
        mealPrepData[0].mealOne.push(foodData);
        if (foodData.confirmMoreFood) {
            console.log("adding more food");
        } else if (mealPrepData[0].meals > 1) {
            console.log("more meals to be added");
        } else {
            console.log("done");
        }
        console.log(mealPrepData[0]);
    });
};

// const suppPrompt = () => {
//     console.log("questions about supps")
//     return inquirer.prompt([
//         {
//             type: "confirm",
//             name: "nattyOrJuice",
//             message: "natty?",
//             default: true,
//             // if false, stack question & supp
//             // if true, supp
//         }
//     ])
// };

// const workoutPrompt = () => {
//     console.log("workout questions")
//     return inquirer.prompt([
//         {
//             type: "checkbox",
//             name: "workout",
//             message: "select workouts happening during this prep",
//             choices: ["weightlifting", "cardio"]
//         },
//         {
//             type: "input",
//             name: "workoutSplit",
//             message: "what's the split?",
//             when: ({ workout }) => workout
//         }
//     ])
// };

mealPrepInfo()
    // .then(mealPrompt)
    // .then(suppPrompt)
    // .then(workoutPrompt)
    .then(answers => {
        mealPrepData.push(answers);
        // console.log(mealPrepData);
        // console.log(mealPrepData[0].meals);
    })
    .then(mealOnePrompt)
    .then(firstMealInfo => {
        console.log(firstMealInfo);
    });