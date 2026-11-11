
//create function with parameters (str, reps)
//create variable string = str
//if 
//reps is negative return Error
//else 
//for loop, repeat the loop a number of times = to reps
//update variable str += str
//return string variable.

const repeatString = function(str, reps) {
    let string = "";
    if (reps < 0) {return "ERROR"}
    else {
    for ( let i = 0 ; i < reps; i++) {
        string += str;
        }
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
