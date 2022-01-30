// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create an array of all the potential characters the user wishes to include. 
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var lowerChar = "abcdefghiklmnopqrsttuvwxtz" .split("");
var numericChar = "1234567890" .split("");
var specialChar = "!@#$%^&*()§" .split("")


function generatePassword() {
// Prompt to confirm how many characters the user would like in their password
  var charLength = prompt("Length of password?")
  while (charLength < 8 || charLength > 128) {
    alert("Choice must only be a numeric value between 8 & 128")
    charlength = prompt("Length of password?")
  }

  var newPassword = []
  
  // Confirm if the user wants to include any uppercase characters in their password
  var upperCase = confirm(" Do you want to include any uppercase characters in your password?")
  if (upperCase === true) {
    newPassword = newPassword.concat(upperChar)
  }

  // Confirm if the user wants to include any lowercase characters in their passowrd 
  var lowerCase = confirm(" Do you want to include any lowercase characters in your password?")
  if (lowerCase === true) {
    newPassword = newPassword.concat(lowerChar)
  }  


  // Confirm if the user wants to include any numeric characters in their password
  var numPass = confirm(" Do you want to include any numeric characters in your password?")
  if (numPass === true) {
    newPassword = newPassword.concat(numericChar)
  }

  
  // Confirm if the user wants to include any special characters in their password
  var specialPass = confirm(" Do you want to include any special characters in your password?")
  if (specialPass === true) {
    newPassword = newPassword.concat(specialChar)
  }

  // Use a loop to create a random password based on the selections and the users desired character length
  var generatedPass = " "
  for (var i = 0; i < charLength; i++) {
    generatedPass += newPassword[Math.floor(Math.random() * newPassword.length)]
  }
 
 return generatedPass 

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);