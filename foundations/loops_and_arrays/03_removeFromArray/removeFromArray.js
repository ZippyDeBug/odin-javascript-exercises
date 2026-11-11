
// New function with intended array, and then a rest parameter, to create a "Param" array of parameters.
//For loop to loop for the duration of the param array.
//new variable for "start" position to record progress of the index of, and avoid re-checking the same index repeatedly.
//Find next iteration of param array item, in original array,then specify this as the Start value.
//While loop based on while start is not a negative result (-1).
//remove current position item.
//check array, for next param array item, using start position as starting index point.
//return the final array
const removeFromArray = function(array, ...param) {
    for (let i = 0; i < param.length ; i++ ) {
        let start = 0;
        start = array.indexOf (param[i], start);
        while (start != -1) {
            array.splice(start,1);
            start = array.indexOf (param[i], start)
        };
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
