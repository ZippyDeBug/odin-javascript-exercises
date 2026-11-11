const sumAll = function(...nums) {
    nums.sort((a, b) => a - b);
    let intArray = [];
    if (nums.every((x) => typeof x === "number" && x >= 0 )) {
         for ( let i = nums[0]; i <= nums.at(-1); i++) {
        intArray.push(i)
        }
        return intArray.reduce((acc,curr)=> acc + curr)
    }       
    else {return "ERROR"}
}

// Do not edit below this line
module.exports = sumAll;
