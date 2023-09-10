const { calc, format } = require("../utils/helpers");

// logic.generate template literal
function generatePage(templateData) {
  const { meals, ...prepInfo } = templateData;

  const prepStats = [
    { id: "duration", value: format.duration(prepInfo.duration) },
    { id: "start", value: format.date(prepInfo.startDate) },
    {
      id: "end",
      value: format.date(
        calc.endDate(prepInfo.startDate, prepInfo.duration)
      ),
    },
    { id: "weight", value: prepInfo.weight },
  ];

  const prepDetails = [
    { id: "workout", value: prepInfo.split },
    { id: "cardio", value: prepInfo.cardio },
    { id: "supplements", value: prepInfo.supps },
    { id: "cheat day", value: prepInfo.cheatday },
  ];

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css2?family=Khula:wght@300&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./style.css">
      <title>${format.sentence(prepInfo.name)}</title>
  </head>
  <body>
    <header>
      <h1>${format.sentence(prepInfo.name)}</h1>
      <p>\u2014 ${prepInfo.goal}</p>
    </header>
    <main>
      <section id="prep-stats">${generatePrepStats(prepStats)}</section>
      <section id="prep-details">${generatePrepDetails(prepDetails)}</section>
      ${generateMealPrepSection(meals)}
    </main>
    <footer>
      <h3>
        <a href="https://github.com/escowin/meal-prep" target="_blank">meal-prep</a>
        &copy;${calc.year()} edwin m. escobar
      </h3>
    </footer>
  </body>
</html>`;
}

function generatePrepStats(stats) {
  return stats
    .map(
      (stat) =>
        `<article id="${stat.id}"><p class="key">${stat.id}</p><p class="value">${stat.value}</p></article>`
    )
    .join("");
}

function generatePrepDetails(details) {
  return !details
    ? ""
    : details
        .map((detail) => `<h2>${format.sentence(detail.id)}</h2> <p>${format.sentence(detail.value)}</p>`)
        .join("");
}

function generateMealPrepSection(meals) {
  let template = "";

  meals.forEach((meal, i) => {
    template += `<article class="meal">
      <h3>meal ${i + 1}</h3>
      <ul class="foods">${generateFoodItems(meal.food)}</ul>
    </article>`;
  });

  return `<section id="prep-meals"><h2>Food</h2>${template}</section>`;
}

function generateFoodItems(food) {
  return food.map((item) => `<li>${item}</li>`).join("");
}

module.exports = generatePage;
