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

// const printProfileData = profileDataArr => {
    // es6 for loop replacement
    // profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// printProfileData(profileDataArgs);

// data.current year
const copyrightYear = new Date().getFullYear();

// data.captures command line
const mealPrepData = process.argv.slice(2, process.argv.length);
const [date, duration] = mealPrepData;

// logic.generate template literal
const generateMealPrep = (date, duration) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/css/styles.css">
        <title>Meal prep</title>
    </head>
    <body>
        <main>
            <h1>Meal prep</h1>
            <h2>${date}</h2>
            <p id="duration">${duration}</p>
        </main>
        <footer>
            <h3 class="section" id="footer">
                &copy;${copyrightYear} <a href="#" target="_blank">Edwin m. escobar</a>
           </h3>
        </footer>
    </body>
    </html>
    `;
};

console.log(date, duration);
console.log(generateMealPrep(date, duration));