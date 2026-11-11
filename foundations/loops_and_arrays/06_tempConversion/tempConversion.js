
function decimalConv(item) {Math.round(item * 10) / 10}

const convertToCelsius = function(oF) {
  let celc = ((oF - 32) * 1.8);
  return celc
};

const convertToFahrenheit = function(oC) {
  let fahren = ((oC * 1.8) + 32);
  return fahren
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


//F -> C : 
// x = x-32 
// x = / 1.8