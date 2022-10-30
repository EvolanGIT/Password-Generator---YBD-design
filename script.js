// Assignment Code
var generateBtn = document.querySelector("#generate");
//this arrays contain all the possible characters for the password.
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["@", "#", "$", "%", "^", "&", "*", "+", "?", "/", "~"];

//this array will contain all options chosen by the user.
var bigArray = [];
//this array contains the arrays all merged into a big one.
var finalArray = [];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
    var confirmLength = window.prompt("please choose the length of your Password. It should be between 8 and 128 characters.");
    passLength = confirmLength;
    console.log(confirmLength);
    console.log(length);
    if (confirmLength >= 129) {
        window.alert("The password should be shorter than 128 characters.");
        return generatePassword();
    }   if (confirmLength <= 7) {
        window.alert("The password should have at least 8 characters.");
        return generatePassword();
    }   if (isNaN(confirmLength)) {
        window.alert("please choose a numeric value.");
        return generatePassword ()
    }  
    
    else {
        var confirmLower = window.confirm("would you like to use lowercase letters?")
        var confirmUpper = window.confirm("would you like to use Uppercase letters?")
        var confirmNum = window.confirm("would you like to use numbers?")
        var confirmSpec = window.confirm("would you like to use special characters?")
        
        if (confirmLower) {
            bigArray.push(lowerCase);
            console.log(bigArray);
        }
        if (confirmUpper) {
            bigArray.push(upperCase);
            console.log(bigArray);
        }
        if (confirmNum) { 
            bigArray.push(numeric);
            console.log(bigArray);
        }
        if (confirmSpec) {
            bigArray.push(special);
            console.log(bigArray);
        }
        if (!confirmLower && !confirmUpper && !confirmNum && !confirmSpec)
        alert("You need at least one choice!!!");
        
        var finalArray = bigArray.flat(1);
    
    for (let i = 0; i < finalArray; i++ ){
        var random  = Math.floor(Math.random() * finalArray.length)
        password += finalArray[random];
        
    }
}}

//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    
}


