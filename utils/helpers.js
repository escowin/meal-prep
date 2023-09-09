const date = new Date()
module.exports = {
  capitalizeFirstWord: (string) => string.charAt(0).toUpperCase() + string.slice(1),

  // plural & singular is dependent on a dynamic number value
  formatDuration: (num) => (num !== 1) ? `${num} weeks` : `${num} week`,

  // returns current date as "YYYY-MM-DD"
  currentDate: () => date.toISOString().split("T")[0],

  // returns array with child array objects equal to the num value
  arrayGen: (num, arr) => {
    for (let i = 0; i < num; i++) {
      const childArr = [];
      arr.push(childArr);
    }
    return arr;
  },

  year: date.getFullYear()
};
