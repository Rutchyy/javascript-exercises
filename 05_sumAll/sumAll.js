const sumAll = function(start, end) {
    let sum = start + end;
    for(let index = start; index < end; index++) {
        sum += index;
    };

    return sum - 1;
};

console.log(sumAll(1, 10))

// Do not edit below this line
module.exports = sumAll;
