const sumAll = function(...nums) {
    if (!nums.every((x) => Number.isInteger(x) && x >= 0 )) {
        return "ERROR"}       
    nums.sort((a, b) => a - b);
    const min = nums.at(0)
    const max = nums.at(-1)
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
        }
        return sum
}

// Do not edit below this line
module.exports = sumAll;
