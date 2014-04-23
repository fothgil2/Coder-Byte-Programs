var str = "hello world, My name is Sam";

var letterCapitalized = function (sentence) {
    var array = sentence.split(" "), newString = "";
    for (var i = 0; i < array.length; i++) {
        var x = array[i][0].toUpperCase();
        var newArray = []
        newArray.push(x);
        if (array[i].length > 1) {
            for (var j = 1; j < array[i].length; j++) {
                newArray.push(array[i][j]);
            }
        }
        newString += newArray.join("") + " ";
    }
    return newString;
};

alert(letterCapitalized(str));