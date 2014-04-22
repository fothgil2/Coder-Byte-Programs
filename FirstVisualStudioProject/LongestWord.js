var string = "We want to find the longest, word in this string."

var LongestWord = function (str) {
    "use strict";
    var longestString = "a";
    var space = " ";
    var arrayOfStrings = str.split(space);
    for (var i in arrayOfStrings) { //strip out non-alphanumeric characters
        arrayOfStrings[i] = arrayOfStrings[i].replace(/\W/g, '');
        //   console.log(senSplit[i]);
    }
    for (var i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length > longestString.length) {
            longestString = arrayOfStrings[i];
        }
    }
    return longestString;
}
alert(LongestWord(string));