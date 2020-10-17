// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ("a", "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

var upperCase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

var nums = ("1", "2", "3", "4", "5", "6", "7", "8", "9");
var specialChar = ["#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","["];

var length = parseInt(prompt("How long do you want your password to be?"));

if(length < 8 || length > 128){
  alert("Your password must be 8 - 128 characters long!")
}

var useLower = confirm("Do you want to include lowercase characters?");
var useUpperCase=confirm("Do you want to include uppercase characters?");
var useNumeric=confirm("Do you want to include numeric characters?");
var useSpecial=confirm("Do you want to include special characters?");