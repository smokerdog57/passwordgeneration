var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // User selects PW criteria
  var pwLength = window.prompt("PW Length: enter a number between 8 and 128");
  var pwLower = window.confirm("Will the PW include lowercase letters?");
  var pwUpper = window.confirm("Will the PW include uppercase letters?");
  var pwNumber = window.confirm("Will the PW include numbers?");
  var pwSpecChar = window.confirm("Will the PW include special characters?");

  // Verify PW meets criteria
    // Convert pwLength to a number so it can be verified
  pwLength = Number(pwLength);
    // Verify pwLength is a number between 8 and 128
  if (Number.isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
    window.alert("PW length must be a number between 8 and 128");
    return;
  }
  // Verify that at least 1 option was selected
  if (!(pwLower || pwUpper || pwNumber || pwSpecChar)) {
    window.alert("PW must include at least one of the character types");
    return;
  }
  var password = generatePassword(pwLength, pwLower, pwUpper, pwNumber, pwSpecChar)
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword(pwLength, pwLower, pwUpper, pwNumber, pwSpecChar) {
  // Create a concatenation of possible characters to be used in PW generation 
  var chosenCharTypes = "";
  var pw = "";

  if (pwLower) { chosenCharTypes += "abcdefghijklmnopqrstuvwxyz"; }
  if (pwUpper) { chosenCharTypes += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; }
  if (pwNumber) { chosenCharTypes += "0123456789"; }
  if (pwSpecChar) { chosenCharTypes += "!@#$%^&*()_+"; }

  for (let index = 0; index < pwLength; index++) {
    var charPickIndex = Math.floor(Math.random() * chosenCharTypes.length);
    pw += chosenCharTypes.charAt(charPickIndex);
  }
  return pw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
