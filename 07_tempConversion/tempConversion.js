const convertToCelsius = function(temperatureInFahrenheit) {
  tempValue = ((temperatureInFahrenheit - 32) * 5/9).toFixed(1);
  return parseFloat(tempValue);
};

const convertToFahrenheit = function(temperatureInCelsius) {
  tempValue = ((temperatureInCelsius * 9/5) + 32).toFixed(1);
  return parseFloat(tempValue)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
