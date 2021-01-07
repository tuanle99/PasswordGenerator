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

// function for generating a random password
function generatePassword() {
  //character for password string
  var lowerRandom = "abcdefghijklmnopqrstuvwxyz";
  var upperRandom = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialRandom = "!#$%&()*+-@<>?,./";
  var numberRandom = "1234567890";

  //promting user input
  var length = 0;
  var option = false;
  while (!option) {
    while (length < 8 || length > 128 || isNaN(length)) {
      length = prompt("Password Length: 8 - 128");
      if (length < 8 || length > 128) {
        alert("Password required length to be between 8 and 128");
      } else if (isNaN(length)) {
        alert("Please enter a valid number");
      }
    }
    var lowercase = confirm("do you want lowercase letter in your password?");
    var uppercase = confirm("do you want uppercase letter in your password?");
    var number = confirm("do you want number character in your password?");
    var special = confirm("do you want special character in your password?");
    if (lowercase || uppercase || number || special) {
      option = true;
    } else {
      alert("Please select at least 1 criteria for your password...")
    }
  }

  //checking user input
  var charRandom = "";
  if (lowercase) {
    charRandom += lowerRandom;
  }
  if (uppercase) {
    charRandom += upperRandom;
  }
  if (number) {
    charRandom += numberRandom;
  }
  if (special) {
    charRandom += specialRandom;
  }

  //generate random password string based on user input
  var ranPass = "";
  for (var i = 0; i < length; i++) {
    ranPass += charRandom.charAt(Math.floor(Math.random() * charRandom.length));
  }

  return ranPass;
}