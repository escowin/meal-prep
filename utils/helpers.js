const calc = {
  // returns array with child array objects equal to the num value
  arrays: (num, arr) => {
    for (let i = 0; i < num; i++) {
      const childArr = [];
      arr.push(childArr);
    }
    return arr;
  },
  // returns current date as "YYYY-MM-DD"
  today: () => new Date().toISOString().split("T")[0],
  // returns an end date value calculated from start date and week duration (converted to milliseconds)
  endDate: (start, duration) => {
    const startDate = new Date(start);
    const endDate = new Date(
      startDate.getTime() + duration * 7 * 24 * 60 * 60 * 1000
    );
    const result = endDate.toISOString().split("T")[0];
    return result;
  },
  // returns current year
  year: () => new Date().getFullYear(),
};

const format = {
  // capitlizes first letter of string
  sentence: (string) => string.charAt(0).toUpperCase() + string.slice(1),
  // reformats common date patterns into YYYY.MM.DD
  date: (date) => date.replace(/[-/]/g, "."),
  // plural & singular is dependent on a dynamic number value
  duration: (num) => (num !== 1 ? `${num} weeks` : `${num} week`),
  // formats single digit num values with 2-digit placeholder
  num: (num) => (num === 10 ? num : `0${num}`),
};

const validate = {
  data: (data) => (!data ? "" : data),
  date: (date) => (!date.match(/\b\d{4}-\d{2}-\d{2}\b/g)) ? (console.log("format date as YYYY-MM-DD"), false) : true,
  input: (input) => (!input ? (console.log("required"), false) : true),
  num: (num) => ((!num || num < 1) ? (console.log("enter a valid number"), false) : true),
  range: (num, min, max) => {
    return !(num >= min && num <= max)
    ? (console.log(`Enter a number between ${min} - ${max}`), false)
    : true
  },
};

module.exports = {
  calc,
  format,
  validate,
};
