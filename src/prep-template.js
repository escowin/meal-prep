// data.current year
const copyrightYear = new Date().getFullYear();

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
    console.log(mealPrepData)
    return 'test'
}

module.exports = generatePage;