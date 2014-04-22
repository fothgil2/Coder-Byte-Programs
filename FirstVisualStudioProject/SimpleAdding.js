var SimpleAdding = function (num) {
    var result = 0;
    for (var i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}
alert(SimpleAdding(12));