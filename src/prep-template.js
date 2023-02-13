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
        <p>start date : ${prepInfo.startDate}</p>
        <p>duration : ${prepInfo.duration} weeks</p>
      </header>
      <main>
        ${generateCardioSection(prepInfo.cardio)}
        ${generateWorkoutSection(prepInfo.split)}
        ${generateSupplementsSection(prepInfo.supps)}
        ${generateMealPrepSection(mealPrep)}
      </main>
      <footer>
        <h3>
          &copy;${copyrightYear} <a href="https://github.com/escowin/meal-prep" target="_blank">Edwin m. escobar</a>
        </h3>
      </footer>
    </body>
    </html>
    `;
};

const generateCardioSection = (cardioData) => {
  if (!cardioData) {
    return "";
  }

  return `<section id='cardio'>
          <p>${cardioData}</p>
        </section>`;
};

const generateWorkoutSection = (workoutData) => {
  if (!workoutData) {
    return "";
  }

  return `<section id='workout-split'>
          <p>${workoutData}</p>
        </section>`;
};

const generateSupplementsSection = (suppData) => {
  if (!suppData) {
    return "";
  }

  return `<section id='supp'>
          <p>${suppData}</p>
        </section>`;
};

const generateMealPrepSection = (mealPrepData) => {
  let template = "";

  mealPrepData.forEach((meal, i) => {
    template += ` <article id="meal">
          <h2>meal ${i + 1}</h2>
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
