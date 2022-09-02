
let date = new Date().getFullYear();

let copyrightYear = function() {
    const yearEl = document.querySelector("#year");
    yearEl.textContent = date;
}

copyrightYear();


// ** promp questions **
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