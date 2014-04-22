var stringMes = "Hello World";
//should return "Ifmmp xpsmE"

function charChange(str) {
    //"use strict";
    var newString = "";
    var character;
    for (var i = 0; i < str.length; i++) { //runs through the string to get all of the character positions
        character = str.charCodeAt(i); //takes the character code at position i
        //checks to see if character is between 'A' and 'Z' or 'a' and 'z', so it won't affect special chars or spaces
        if (character > 64 && character < 91 || character > 96 && character < 123) { 
        
            character = character + 1; //adds 1 to shift the value

            if (character == 123) { character = 65; } //changes z to A
            else if (character == 101) { character = 69; } //changes e to E
            else if (character == 105) { character = 73; } //changes i to I
            else if (character == 111) { character = 79; } //changes o to O
            else if (character == 117) { character = 85; } //changes u to U

       }
       newString += String.fromCharCode(character); //reforms the string
    }
    return newString;
}
var test = charChange(stringMes);
alert(test);
