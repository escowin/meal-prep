const fs = require("fs");
const path = require("path");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    // creates a /dist directory if one does not exist
    const distDirectory = "./dist";
    if (!fs.existsSync(distDirectory)) {
        fs.mkdirSync(distDirectory, { recursive: true }, err => {});
    }

    // writes the index.html content with template data
    fs.writeFile(path.join(distDirectory, "index.html"), fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      // if all is well, the promise is resolved & it'll send the data to the .then() method
      resolve({
        ok: true,
        message: "file created. checkout ./dist/index.html",
      });
    });
  });
};

// copies /src stylesheet into /dist
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "style sheet successfully copied.",
      });
    });
  });
};

module.exports = { writeFile, copyFile };
