
var x = "++=f+=+d+d+=";


function SimpleSymbols(str) {
    var result = true;

    if (str[0] !== "+" && str[0] !== "="){
        return result = false;
    }
    else if (str[str.length - 1] !== "+" && str[str.length - 1] !== "=") {
        return result = false;
    }
    for (var i = 1; i < str.length - 1; i++)
    {
        if (str[i] !== "+" && str[i] !== "=") {
           
            if (str[i -1] !== "+" || str[i +1] !== "+"){
                return false;
            }
            else {
                result = true;
            }
        }
    }
    // code goes here  
    return result;

}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
alert(SimpleSymbols(x));