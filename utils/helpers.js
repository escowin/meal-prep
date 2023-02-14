const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
// plural & singular is dependent on a dynamic number value
const formatDuration = (value) => {
  if (value !== 1) {
    return `${value} weeks`;
  }
  return `${value} week`;
};

module.exports = { capitalizeFirstLetter, formatDuration };
