var Division = function (num1, num2) {
    var num1Array = [], num2Array = [], compareArray = [], max = 1;
    for (var i = 1; i <= num1; i++) {
        if (num1 % i === 0) {
            num1Array.push(i);
        }
    }
    for (var i = 1; i <= num2; i++) {
        if (num2 % i === 0) {
            num2Array.push(i);
        }
    }
    num1Array = num1Array.reverse();
    num2Array = num2Array.reverse();
    for (var i in num1Array) {
        for (var j in num2Array) {
            if (num1Array[i] == num2Array[j]) {
                compareArray.push(num1Array[i])
            }
        }
    }
    for (var k in compareArray) {
        if (compareArray[k] > max) {
            max = compareArray[k];
        }
    }
    return max;
}
alert(Division(100, 50));