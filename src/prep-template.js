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
        <link rel="stylesheet" href="./assets/css/styles.css">
        <title>${prepInfo.name}</title>
    </head>
    <body>
        <header>
            <h1>${prepInfo.name}</h1>
            <p>start date : ${prepInfo.startDate}</p>
            <p>duration : ${prepInfo.duration} weeks</p>
        </header>
        <main>
            ${generateMealPrepSections(mealPrep)}
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

const generateMealPrepSections = (mealPrepData) => {
  let template = "";

  mealPrepData.forEach((meal, i) => {
    template += `
          <section>
            <h2>meal ${i + 1}</h2>
            <article>`;
    meal.food.forEach((foodItem) => (template += `
                <p>${foodItem}</p>`));
    template += `
            </article>
          </section>
        `;
  });

  return template;
};

module.exports = generatePage;
