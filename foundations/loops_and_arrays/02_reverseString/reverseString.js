const reverseString = function(string) {
let seperation = string.split("");
seperation.reverse();
let flippedString = seperation.join("");
return flippedString;
};

// Do not edit below this line
module.exports = reverseString;
