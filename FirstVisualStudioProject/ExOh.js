var ExOh = function (str) {
    var testX = 0, testO = 0, result;
    var strSplit = str.split("");
    for (var i in strSplit) {
        if (strSplit[i] == 'O' || strSplit[i] == 'o') {
            testO++;
        }
        else if (strSplit[i] == 'X' || strSplit[i] == 'x') {
            testX++;
        }
    }
    if (testX == testO) {
        return result = true;
    }
    else {
        return result = false;
    }
}
alert(ExOh("x"));