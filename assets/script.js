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
   let length = document.getElementById("length-input").value; 
   if (length < 10) {
   document.getElementById("length-warning").textContent = "Min Length: 10 characters";
   } else if (length > 64) {
    document.getElementById("length-warning").textContent = "Max Length: 64 characters";
   } else if (length !== /10-64/) {
    document.getElementById("length-warning").textContent = "You must enter a number in digit form";
   } else {
    document.getElementById("length-warning").textContent = ""; 
    return length; 
   }
}

//function to get password options
function getPasswordOptions() {
  if (document.getElementById("lower-input").checked +
  document.getElementById("upper-input").checked +
  document.getElementById("number-input").checked +
  document.getElementById("special-input").checked < 1) {
    document.getElementById("input-warning").textContent = "You must select at least one type";
  } else {
    document.getElementById("input-warning").textContent = "";
    let newArr = []
   if (document.getElementById("lower-input").checked) {
    newArr.push(lowerCasedCharacters); 
   }; 
   if (document.getElementById("upper-input").checked) {
    newArr.push(upperCasedCharacters); 
   };
   if (document.getElementById("number-input").checked) {
    newArr.push(numericCharacters);
   }; 
   if (document.getElementById("special-input").checked) {
    newArr.push(specialCharacters)
   }
 return newArr; 
  }
  }

// Function for getting a random element from an array
function getRandom(arr) {
   let i = Math.floor(Math.random() * arr.length); 
   let j = Math.floor(Math.random() * arr[i].length)
   return arr[i][j];
}

// Function to generate password with user input
function generatePassword() {
  let password = ""; 
  let optionsArray = getPasswordOptions(); 
  for (i = 0; i < lengthCheck() - optionsArray.length; i++) {
    password += getRandom(optionsArray); 
  } 
  //makes sure at least 1 of each type of character is in password at random index
  if(lengthCheck()) {
  for (i = 0; i < optionsArray.length; i++) { 
    const passwordIndex = Math.floor(Math.random() * password.length);
    const passEnd = password.slice(passwordIndex);  
    let passStart = password.slice(0, passwordIndex);
    const add = optionsArray[i][(Math.floor(Math.random() * optionsArray[i].length))];
    passStart += add; 
    password = passStart + passEnd; 
  }
} else {
  password = "Please enter a valid password length"
}
return password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  console.clear();
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);