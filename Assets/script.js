// Assignment Code
var lowerCase = ("a", "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var upperCase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var nums = ("1", "2", "3", "4", "5", "6", "7", "8", "9");
var specialChar = ["#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","["];
var pwArea = document.querySelector("#thepassword")

function generatePassword(){
  var pw =  "";
  var possibles = []
  var length = parseInt(prompt("How long do you want your password to be?"));

  if(length < 8 || length > 128 || isNaN(length)){
    alert("Your password must be 8 - 128 characters long!")
  } else {

  var lowercaseTrue = confirm("Do you want to include lowercase characters?");
  var upperCaseTrue=confirm("Do you want to include uppercase characters?");
  var numsTrue=confirm("Do you want to include numbers?");
  var specialCharTrue=confirm("Do you want to include special characters?");



  if (lowercaseTrue)  possibles.push(lowerCase) 
  if (upperCaseTrue)  possibles.push(upperCase) 
  if (numsTrue) { possibles.push(nums) }
  if (specialCharTrue) { possibles.push(specialChar) }

while (pw.length < length) {
    for (let i = 0; i < possibles.length; i++){
    let rand = Math.floor(Math.random() * possibles[i].length)
    pw += possibles[i][rand]
    }

pwArea.textContent = pw
}
  }
}  
document.querySelector("#generate").addEventListener('click', generatePassword)