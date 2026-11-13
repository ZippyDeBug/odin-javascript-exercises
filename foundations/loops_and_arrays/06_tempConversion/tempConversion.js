

function roundedToFixed(input, digits){
  var rounder = Math.pow(10, digits);
  return (Math.round(input * rounder) / rounder).toFixed(digits);
}

const convertToCelsius = function(oF) {
  let celc = ((oF - 32) / 1.8);
    return parseFloat(roundedToFixed(celc, 1))
};

const convertToFahrenheit = function(oC) {
  let fahren = ((oC * 1.8) + 32);
  return parseFloat(roundedToFixed(fahren, 1))
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};



//F -> C : 
// x = x-32 
// x = / 1.8