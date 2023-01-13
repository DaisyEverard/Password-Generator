// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

/*
 type="text" id="userInput" />
type="submit" onclick="othername();" />


function othername() {
    var input = document.getElementById("userInput").value;
    alert(input);
}
*/

//check length wanted
let lengthCheck = () => {
   let length = document.getElementById("lengthInput").value; 
   if (length < 10) {
   document.getElementById("lengthWarning").textContent += "Min Length: 10 characters";
   } else if (length > 64) {
    document.getElementById("lengthWarning").textContent += "Max Length: 64 characters";
   } else {
    return length; 
   }
}

lengthCheck(); 
// Function to prompt user for password options
let lengthRequired = document.getElementById("lengthInput").value;
console.log(lengthRequired); 

let longArr = []; 
function getPasswordOptions() {
   lengthRequired = prompt("How many characters would you like in your password?")
   if (confirm("Would you like to use lower case characters?\n Your options are lower, upper, numeric, and special characters")) {
    longArr.push(lowerCasedCharacters); 
   }; 
   if (confirm("Would you like to use upper case characters?")) {
    longArr.push(upperCasedCharacters); 
   };
   if (confirm("Would you like to use numbers?")) {
    longArr.push(numericCharacters);
   }; 
   if (confirm("Would you like to use special characters (@, %, +...)?")) {
    longArr.push(specialCharacters)
   }
 console.log("LongArr: " + longArr); 
 console.log("lengthRequired: " + lengthRequired);
 return longArr; 
}

// Function for getting a random element from an array
function getRandom(arr) {
   let i = Math.floor(Math.random() * arr.length); 
   return arr[i];
}

// Function to generate password with user input
function generatePassword() {
  let password = ""
  for (i = 0; i < lengthRequired; i++) {
    password += getRandom(longArr)
  } 
  console.log("Password: " + password)
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);