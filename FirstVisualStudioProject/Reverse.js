
var string = "Pop goes the weasel."


function FirstReverse(str) {
    "use strict";
    // code goes here  
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
alert(FirstReverse(string));