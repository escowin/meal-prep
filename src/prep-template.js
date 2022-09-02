// data.current year
const copyrightYear = new Date().getFullYear();

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

module.exports = generateMealPrep;