const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
// plural & singular is dependent on a dynamic number value
const formatDuration = (value) => {
  (value !== 1) ? `${value} weeks` : `${value} week`
  // if (value !== 1) {
  //   return `${value} weeks`;
  // }
  // return `${value} week`;
};

// returns current date as "YYYY-MM-DD"
const getDate = () => {
  const date = new Date().toISOString()
  return date.split("T")[0]
}

module.exports = { capitalizeFirstLetter, formatDuration, getDate };
