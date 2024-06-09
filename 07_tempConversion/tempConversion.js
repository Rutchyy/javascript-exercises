const convertToCelsius = function(fahrenheit) {
  celsius = (fahrenheit - 32) * 5 / 9;

  return celsius;
};

const convertToFahrenheit = function(celsuis) {
  fahrenheit = (9/5 * celsuis) + 32;
  
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
