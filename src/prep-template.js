const {
  capitalizeFirstWord,
  formatDuration,
  year,
} = require("../utils/helpers");

// logic.generate template literal
function generatePage(templateData) {
  const { mealsArr, ...prepInfo } = templateData;

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css2?family=Khula:wght@300&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./style.css">
      <title>${capitalizeFirstWord(prepInfo.name)}</title>
  </head>
  <body>
    <header>
      <h1>${capitalizeFirstWord(prepInfo.name)}</h1>
      <p class="key">start date</p>
      <p class="value">${prepInfo.startDate}</p>
      <p class="key">duration</p>
      <p class="value">${formatDuration(prepInfo.duration)}</p>
      ${generateWeightDetails(prepInfo.weight)}
    </header>
    <main>
      ${generateWorkoutSection(prepInfo.split)}
      ${generateCardioSection(prepInfo.cardio)}
      ${generateSupplementsSection(prepInfo.supps)}
      ${generateCheatDaySection(prepInfo.cheatday)}
      ${generateMealPrepSection(mealsArr)}
    </main>
    <footer>
      <h3>
        <a href="https://github.com/escowin/meal-prep" target="_blank">meal-prep</a>
        &copy;${year} Edwin m. escobar
      </h3>
    </footer>
  </body>
</html>`;
}

function generateWeightDetails(weightData) {
  return weightData
    ? ""
    : `<p class='key'>weight</p><p class='value'>${weightData}</p>`;
}

function generateWorkoutSection(workoutData) {
  return !workoutData
    ? ""
    : `<section id='workout-split'>
        <h2>Workout split</h2>
        <p>${capitalizeFirstWord(workoutData)}</p>
      </section>`;
}

function generateCardioSection(cardioData) {
  return !cardioData
    ? ""
    : `<section id='cardio'>
        <h2>Cardio</h2>
        <p>${capitalizeFirstWord(cardioData)}</p>
      </section>`;
}

function generateSupplementsSection(suppData) {
  return !suppData
    ? ""
    : `<section id='supplements'>
        <h2>Supplements</h2>
        <p>${capitalizeFirstWord(suppData)}</p>
      </section>`;
}

function generateCheatDaySection(cheatDayData) {
  return !cheatDayData
    ? ""
    : `<section id='cheat-day'>
        <h2>Cheat day</h2>
        <p>${capitalizeFirstWord(cheatDayData)}</p>
      </section>`;
}

function generateMealPrepSection(meals) {
  let template = "";

  meals.forEach((meal, i) => {
    template += `<article id="meal">
      <h3>${i + 1}</h3>
      <ul id="foods">${generateFoodItems(meal.food)}</ul>
    </article>`;
  });

  return `<section id="meal-prep"><h2>Meal prep</h2>${template}</section>`;
}

function generateFoodItems(food) {
  return food.map((item) => `<li>${item}</li>`).join("");
}

module.exports = generatePage;
