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
  console.log(typeof pwLength);
  if (typeof(pwLength) === "string" || pwLength < 8 || pwLength > 128) {
    window.alert("PW length must be a number between 8 and 128");
    return;
  }
  if (!(pwLower || pwUpper || pwNumber || pwSpecChar)) {
    window.alert("PW must include at least one of the character types");
    return;
  }
  var password = generatePassword(pwLength, pwLower, pwUpper, pwNumber, pwSpecChar)
  window.alert(`Your new password is ${password}`);
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
generateBtn.addEventListener("click", writePassword);
