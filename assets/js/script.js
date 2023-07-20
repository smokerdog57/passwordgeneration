//Set generateBtn = to the HTML button element with the id = generate
var generateBtn = document.querySelector("#generate");

// function writePassword:  Write password to the #password input. First queries the user
// for PW criteria, then validates criteria, then calls function generatePassword 
// which generates the PW and returns it to this function into the variable password. 
// Finally, 
function writePassword() {

  // User inputs/selects PW criteria
  var pwLength = window.prompt("Click OK after entering password (PW) length: number between 8 and 128.");
  window.alert("Next you will be presented with a series of PW options. You must choose at least one option to generate a password. Click ok to continue");
  var pwLower = window.confirm("Click OK if PW will include lowercase letters.");
  var pwUpper = window.confirm("Click OK if PW will include uppercase letters.");
  var pwNumber = window.confirm("Click OK if PW will include numbers.");
  var pwSpecChar = window.confirm("Click OK if PW will include special characters.");
  
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
  // Call generatePassword with returns pw to variable password
  var password = generatePassword(pwLength, pwLower, pwUpper, pwNumber, pwSpecChar)
  
  // Set passwordText = the HTML textarea element with the id = password
  var passwordText = document.querySelector("#password");

  // Set value of passwordText = password. Thiws write the password to the textarea.
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


  // loop to create password 
  for (let index = 0; index < pwLength; index++) {
    var charPickIndex = Math.floor(Math.random() * chosenCharTypes.length);
    pw += chosenCharTypes.charAt(charPickIndex);
  }
  // returns pw to writePassword function
  return pw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
