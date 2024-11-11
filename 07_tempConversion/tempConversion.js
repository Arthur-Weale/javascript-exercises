const convertToCelsius = function(temperatureInFahrenheit) {
  tempValue = ((temperatureInFahrenheit - 32) * 5/9).toFixed(1);//Contains fahrenheit to celsius formula and calculates to 1 significant value using the toFixed(1).
  return parseFloat(tempValue);
};

const convertToFahrenheit = function(temperatureInCelsius) {
  tempValue = ((temperatureInCelsius * 9/5) + 32).toFixed(1);//Contains celsius to fahrenheit formula and calculates.
  return parseFloat(tempValue)
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
