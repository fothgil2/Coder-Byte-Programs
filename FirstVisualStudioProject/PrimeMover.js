var number = 100;

var PrimeMover = function (num) {
    var counter = 2;

    if (num == 1) {
        return 2;
    }
    else if (num == 2) {
        return 3;
    }

    for (var i = 4; i < 7920; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                break;
            }
            if (j == i - 1) {
                counter++;
            }
          }
         if (counter == num) {
         return i;
         }
    }
}
alert(PrimeMover(number));