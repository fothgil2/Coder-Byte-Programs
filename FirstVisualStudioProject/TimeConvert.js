function TimeConvert(num) {
    var mins, hours;

    mins = (num % 60);
    if (num >= 60) {
        hours = Math.floor(num / 60);
    }
    else
        hours = 0;
    // code goes here  
    return hours + ":" + mins;

}