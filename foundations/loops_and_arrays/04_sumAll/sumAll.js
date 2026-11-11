const sumAll = function(...nums) {
    nums.sort((a, b) => a - b);
    let intArray = [];
    for ( let i = nums[0]; i <= nums.at(-1); i++) {
        intArray.push(i)
    }
    return intArray.reduce((acc,curr)=> acc + curr)
};

// Do not edit below this line
module.exports = sumAll;
