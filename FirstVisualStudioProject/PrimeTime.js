var PrimeTime = function (num) {
    var test = true;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return test = false;
        }
    }
    return test;
}
alert(PrimeTime(110));