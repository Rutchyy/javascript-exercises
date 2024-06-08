const removeFromArray = function(arr, exception) {
    let removed = arr.indexOf(exception);
    let array = arr;
    array.splice(removed, 1);

    return array;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
