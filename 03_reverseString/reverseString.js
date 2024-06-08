const reverseString = function(string) {
    let temp = string.split("");
    temp.reverse();

    let reversed = "";

    for(let i = 0; i < temp.length; i++) {
        reversed += temp[i];
    }

    console.log(reversed);
};

reverseString("this and that")

// Do not edit below this line
module.exports = reverseString;
