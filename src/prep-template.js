// data.current year
const copyrightYear = new Date().getFullYear();

const mockData = {
    name: "mock prep",
    startDate: "2023.02.08",
    duration: 3,
    meals: 3,
    details: ["cardio", "workout split"],
    cardio: "rowing/5x week",
    split: "chest/delts/back/arms/legs",
    mealPrep: [
      {
        food: ["1 egg", "1/2 cup egg whites", "1oz oats"],
      },
      {
        food: ["5oz chicken", "3oz mixed vegies"],
      },
      {
        food: ["1.8oz protein powder", "1 tbsp peanut butter"],
      },
      {
        food: ["6oz white meat", "3oz veggies", "5oz rice"],
      },
    ],
  };

// logic.generate template literal
const generatePage = (templateData) => {
    const { mealPrep, ...prepInfo } = templateData
    // console.log(prepInfo)
    // console.log(mealPrep)

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
            <p>${prepInfo.date}</p>
            <p id="duration">${prepInfo.duration}</p>
        </header>
        <main>
            ${generateMealPrepSections(mealPrep)}
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

const generateMealPrepSections = (mealPrepData) => {
    let template = '';

    mealPrepData.forEach((meal, i) => {
        template += `<section><h2>meal ${i + 1}</h2><article>`
        meal.food.forEach(foodItem => template += `<p>${foodItem}</p>`)
        template += `</article></section>`
    })

    console.log(template)
    return template
}

generatePage(mockData);


// module.exports = generatePage;