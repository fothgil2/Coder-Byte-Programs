function PalindromeTwo(str) {
    var result, reverseString, regString,reverseArray, lowerString;
    lowerString = str.toLowerCase();
    var newString = lowerString.split("");
    for (var i in newString) { //strip out non-alphanumeric characters
        newString[i] = newString[i].replace(/\W/g,'');
    }
    regString = newString.join("");
    reverseArray = newString.reverse();
    reverseString = reverseArray.join("");
    for (var i = 0; i < regString.length; i++) {
        if (reverseString.charAt(i) !== regString.charAt(i))
            return false;
    }
    return true;
}

alert(PalindromeTwo("I like cats"));