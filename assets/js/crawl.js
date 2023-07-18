var generateBtn = document.querySelector("#generate");
console.log(generate);

// Write password to the #password input
function writePassword() {
  // User selects PW criteria
  var pwLength = window.prompt("PW Length: enter a number between 8 and 128");
  var pwLower = window.confirm("Will the PW include lowercase letters?");
  var pwUpper = window.confirm("Will the PW include uppercase letters?");
  var pwNumber = window.confirm("Will the PW include numbers?");
  var pwSpecChar = window.confirm("Will the PW include special characters?");
  // Verify PW meets criteria
  if (pwLength < 8 || pwLength > 128) {
    window.alert("PW length must be between 8 and 128 characters")
    return;
  }
  if (!(pwLower || pwUpper || pwNumber || pwSpecChar)) {
    window.alert("PW must include at least one of the character types")
    return;
  }
  var password = generatePassword(pwLength,pwLower,pwUpper,pwNumber,pwSpecChar)
}
function generatePassword(pwLength,pwLower,pwUpper,pwNumber,pwSpecChar) {
  // Create a concatenation of possible characters to be used in PW generation 
  var chosenCharTypes = "";
  if (pwLower) {chosenCharTypes += "abcdefghijklmnopqrstuvwxyz";}
  if (pwUpper) {chosenCharTypes += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";}
  if (pwNumber) {chosenCharTypes += "0123456789";}
  if (pwSpecChar) {chosenCharTypes += "!@#$%^&*()_+";}
  //for (let index = 0; index < pwLength.length; index++) {
  var charPickIndex = Math.floor(Math.random() * chosenCharTypes.length);
  var temp = chosenCharTypes.charAt(charPickIndex);
  console.log("The concatenated char list is: " + chosenCharTypes);
  console.log("The pickindex is " + charPickIndex);
  }

generateBtn.addEventListener("click", writePassword);
