"use strict";
var string1 = "lettrrkakaeaaaqq";
var string2 = "letter";


var StringScramble = function (str1, str2) {
    //"use strict";
    var str1Array, str2Array,str1Removed, str2Removed;

    if (str1.length < str2.length) { return false; }

    //splits the strings into an array of characters
    str1Array = str1.split("");
    str2Array = str2.split("");

    for (var i = 0; i < str1Array.length; i++) {
        for (var j = 0; j < str2Array.length; j++) {
            //if both arrays contain the same letter, the letter is removed from both arrays and the loop breaks back
            if (str1Array[i] === str2Array[j]) {
                str1Removed = str1Array.splice(i, 1, "");
                str2Removed = str2Array.splice(j, 1, "");
                break;
            }
        }
    }
    //joins the arrays into a string with no spaces or commas, in order to compare them
    str1 = str1Array.join("");
    str2 = str2Array.join("");
    //if both arrays are empty, then the strings can be rearranged to fit eachother
         if (str1.length === 0 && str2.length === 0) { return true; }
    else if (str1.length !== 0 && str2.length === 0) { return true;}
    else if (str1.length === 0 && str2.length !== 0) { return false; }
    //if there is any difference in the strings, then the strings do not fit
    for (var i = 0; i <= str1.length; i++) {
        for (var j = 0; i <= str2.length; j++) {
            if (str1[i] !== str2[j]) {
                return false;
            }
        }
    }
    return true;
};
alert(StringScramble(string1, string2));