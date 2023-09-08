const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// plural & singular is dependent on a dynamic number value
const formatDuration = (value) => {
  value !== 1 ? `${value} weeks` : `${value} week`;
  // if (value !== 1) {
  //   return `${value} weeks`;
  // }
  // return `${value} week`;
};

// returns current date as "YYYY-MM-DD"
const getDate = () => {
  const date = new Date().toISOString();
  return date.split("T")[0];
};

// returns array with child array objects equal to the num value
const arrayGen = (num, arr) => {
  for (let i = 0; i < num; i++) {
    const childArr = [];
    arr.push(childArr);
  }
  return arr;
};

module.exports = { capitalizeFirstLetter, formatDuration, getDate, arrayGen };
