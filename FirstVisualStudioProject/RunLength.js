var text = "aaawwwoopp";

var RunLength = function (str) {
    var strArray = str.split("");
    var counter = 1;
    var result = "";

    for (var i = 0; i < strArray.length; i++) {
        var j = i;
        if (strArray[j] == strArray[++j]) {
            counter++;
        }
        else {
            result += counter + strArray[i];
            counter = 1;
        }
    }
    return result;
}

alert(RunLength(text));