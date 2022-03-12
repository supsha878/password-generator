// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// create criteria possibilities
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = [];
lowercase.forEach(i => {
  uppercase.push(i.toUpperCase());
});
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var possibilities = [lowercase, uppercase, number, special];


// create password randomly
function generatePassword() {
  var passLength = getLength();
  var choices = getChoices();
  var charPossiblities = getCharacters(choices);

  // validate character choices
  if (charPossiblities.length === 0) {
    window.alert("Please choose at least one type of character.");
    return "";
  }

  // randomly select characters
  var password = [];
  for(i = 1; i <= passLength; i++) {
    var newChar = charPossiblities[Math.floor(Math.random() * charPossiblities.length)];
    password.push(newChar);
  }

  return password.join("");
}

// collect length preference
function getLength() {
  var passLength = (window.prompt("How many characters should your password be?")) * 1;

  // validate password length input
  while(isNaN(passLength) || passLength < 8 || passLength > 128) {
    passLength = (window.prompt("Please enter a number between 8-128:")) * 1;
  }

  return passLength;
}

// collect character preferences
function getChoices() {
  var lowerChoice = window.confirm("Do you want to include lowercase letters?");
  var upperChoice = window.confirm("Do you want to include uppercase letters?");
  var numChoice = window.confirm("Do you want to include numbers?");
  var specChoice = window.confirm("Do you want to include special characters?");
  return [lowerChoice, upperChoice, numChoice, specChoice];
}

// collect character possibilities into array
function getCharacters(choices) {
  var chars = [];

  for(i = 0; i < choices.length; i++) {
    if(choices[i]) {
      chars = chars.concat(possibilities[i]);
    }
  }

  return chars;
}