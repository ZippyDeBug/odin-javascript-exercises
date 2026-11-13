const convertToCelsius = function(oF) {
  return Math.round (((oF - 32) / 1.8) * 10) / 10;
};

const convertToFahrenheit = function(oC) {
  return Math.round (((oC * 1.8) + 32) * 10) / 10;
  };


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};



//F -> C : 
// x = x-32 
// x = / 1.8