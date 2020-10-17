// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ("a", "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

var upperCase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

var nums = ("1", "2", "3", "4", "5", "6", "7", "8", "9");
var specialChar = ["#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","["];


function generatePassword(){
  var passwordString =  "";
  
  var length = parseInt(prompt("How long do you want your password to be?"));

  if(length < 8 || length > 128 || isNaN(length)){
    alert("Your password must be 8 - 128 characters long!")
  }

// Declaring variables
var useLower = confirm("Do you want to include lowercase characters?");
var useUpper=confirm("Do you want to include uppercase characters?");
var useNums=confirm("Do you want to include numbers?");
var useSpecial=confirm("Do you want to include special characters?");



// Check to see if all variables are included 
while (useLower == false && useUpper == false && useNums == false && useSpecial == false) { 
  alert("Your password did not meet requirements")
  useLower=confirm("Do you want to include lowercase characters?");
  useUpper=confirm("Do you want to include uppercase characters?");
  useNums=confirm("Do you want to include numbers?");
  useSpecial=confirm("Do you want to include special characters?");
}

for (let i = 0; passwordLength;i++)
var randomCharArrayNum;
var selectedCharArray;
var randomCharNum;
var randomChar;

randomCharArrayNum= parseInt(Math.floor(Math.random()*caseArray.length)); 

selectedCharArray=caseArray[randomCharArrayNum]; 

randomCharNum=Math.floor(Math.random()*selectedCharArray.length);

randomChar=selectedCharArray[randomCharNum];

passwordString+=randomChar;



}





