const date = new Date();
module.exports = {
  // capitlizes first letter of string
  sentenceCase: (string) => string.charAt(0).toUpperCase() + string.slice(1),
  // returns current date as "YYYY-MM-DD"
  currentDate: () => date.toISOString().split("T")[0],
  // reformats common date patterns into YYYY.MM.DD
  formatDate: (date) => date.replace(/[-/]/g, "."),
  // plural & singular is dependent on a dynamic number value
  formatDuration: (num) => (num !== 1 ? `${num} weeks` : `${num} week`),
  // returns array with child array objects equal to the num value
  arrayGen: (num, arr) => {
    for (let i = 0; i < num; i++) {
      const childArr = [];
      arr.push(childArr);
    }
    return arr;
  },
  // returns an end date value calculated from start date and week duration (converted to milliseconds)
  calculateEndDate: (start, duration) => {
    const startDate = new Date(start);
    const endDate = new Date(
      startDate.getTime() + duration * 7 * 24 * 60 * 60 * 1000
    );
    const result = endDate.toISOString().split("T")[0];
    return result;
  },
  year: date.getFullYear(),
  formatNum: (num) => (num === 10 ? num : `0${num}`),
};
