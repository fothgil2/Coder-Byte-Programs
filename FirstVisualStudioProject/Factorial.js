var number = 8;
var FirstFact = function (num) {
    "use strict";
    for (var i = num - 1; i > 0; i--) {
        num *= i;

    }
    return num;
}
alert(FirstFact(number));