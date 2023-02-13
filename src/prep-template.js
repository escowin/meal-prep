// data.current year
const copyrightYear = new Date().getFullYear();

// logic.generate template literal
const generatePage = (templateData) => {
  const { mealPrep, ...prepInfo } = templateData;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>${prepInfo.name}</title>
    </head>
    <body>
      <header>
        <h1>${prepInfo.name}</h1>
        <p class="key">start date</p>
        <p class="value">${prepInfo.startDate}</p>
        <p class="key">duration</p>
        <p class="value">${formatDuration(prepInfo.duration)}</p>
      </header>
      <main>
        ${generateWorkoutSection(prepInfo.split)}
        ${generateCardioSection(prepInfo.cardio)}
        ${generateSupplementsSection(prepInfo.supps)}
        ${generateMealPrepSection(mealPrep)}
      </main>
      <footer>
        <h3>
          <a href="https://github.com/escowin/meal-prep" target="_blank">meal-prep</a>
          &copy;${copyrightYear} Edwin m. escobar
        </h3>
      </footer>
    </body>
    </html>
    `;
};

// plural & singular is dependent on a dynamic number value
const formatDuration = (value) => {
  if (value !== 1) {
    return `${value} weeks`
  }
  return `${value} week`
}

const generateCardioSection = (cardioData) => {
  if (!cardioData) {
    return "";
  }

  return `<section id='cardio'>
          <h2>Cardio</h2>
          <p>${cardioData}</p>
        </section>`;
};

const generateWorkoutSection = (workoutData) => {
  if (!workoutData) {
    return "";
  }

  return `<section id='workout-split'>
          <h2>Workout split</h2>
          <p>${workoutData}</p>
        </section>`;
};

const generateSupplementsSection = (suppData) => {
  if (!suppData) {
    return "";
  }

  return `<section id='supplements'>
          <h2>Supplements</h2>
          <p>${suppData}</p>
        </section>`;
};

const generateMealPrepSection = (mealPrepData) => {
  let template = "";

  mealPrepData.forEach((meal, i) => {
    template += ` <article id="meal">
          <h3>${i + 1}</h2>
          <ul id="foods">`;
    meal.food.forEach(
      (foodItem) =>
        (template += `
            <li>${foodItem}</li>`)
    );
    template += `
          </ul>
         </article>
        `;
  });

  return `<section id="meal-prep">
        ${template}
      </section>`;
};

module.exports = generatePage;
