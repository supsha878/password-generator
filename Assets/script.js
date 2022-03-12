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
var lowercase = "abcdefghijklmnopqrstuvwxyz".split();
var uppercase = [];
lowercase.forEach(i => {
  uppercase.push(i.toUpperCase());
});
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var possibilities = [lowercase, uppercase, number, special];

function generatePassword() {
  // collect length preference
  var passLength = (window.prompt("How many characters should your password be?")) * 1;

  // validate password length input
  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    passLength = (window.prompt("Please enter a number between 8-128:")) * 1;
  }

  // collect character preferences
  var lowerChoice = window.confirm("Do you want to include lowercase letters?");
  var upperChoice = window.confirm("Do you want to include uppercase letters?");
  var numChoice = window.confirm("Do you want to include numbers?");
  var specChoice = window.confirm("Do you want to include special characters?");
  var choices = [lowerChoice, upperChoice, numChoice, specChoice];

  // collect character possibilities
  var charPossiblities = [];

  for (i = 0; i < choices.length; i++) {
    if (choices[i]) {
      charPossiblities = charPossiblities.concat(possibilities[i]);
    }
  }

  // validate character choice input
  if (charPossiblities.length === 0) {
    window.alert("Please choose at least one type of character.");
    return "";
  }

  // 4. figure out which character type is which?
  // ???

  //return Math.floor(Math.random() * max);
  // randomly select characters
  var password = [];
  for (i = 1; i <= passLength; i++) {
    var newChar = charPossiblities[Math.floor(Math.random() * charPossiblities.length)];
    console.log(newChar);
    password.push(newChar);
  }

  // 8. loop through guaranteed elements, replace
// elements in passwork array. 



  // 9. join characters in arry?
  // 10. return

  // should i separate these into different functions?
  //should i do check
  // github pages.
  return password.join("");
}

//pseudocode done
// 1. get user preferences
// 2. create buckets (above 1)
// 3. identify & collect the buckets
// 5. make empty string var
// 6. random draw
// 7. put characters into password
// 9. join characters in arry?
// 10. return password.
