const leapYears = function(date) {
    if(date % 4 == 0) {
        return true;
    } else {
        return false;
    }
};

console.log(leapYears(2024))

// Do not edit below this line
module.exports = leapYears;
