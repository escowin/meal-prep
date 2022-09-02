
let date = new Date().getFullYear();

let copyrightYear = function() {
    const yearEl = document.querySelector("#year");
    yearEl.textContent = date;
}

copyrightYear();