# Password-Generator

## Link to site

https://daisyeverard.github.io/Password-Generator/

## Preview

<p align="center">
  <img src="./assets/images/preview.png" width="500" alt="screenshot of site">
  <img src="./assets/images/preview2.png" width="500" alt="screenshot with error message">
</p>

## Description

A simple tool to generate a random password that meets various criteria.
The user can choose how many characters to include and what kinds of characters (uppercase, lowercase, numerical, special). 

- If the length is less than 10, or more than 64, an error message displays
- If no character types are selected, an error displays
- If number not entered, error displays
- Each selected character type will appear at least once in the password. 
- The password is displayed in a text box once generated. 

## Issues and solutions

#### linking input boxes to Javascript functions: 
document.getElementById('id-name') will find the id in html. You can then use various prefixes such as .value, .checked, .text content to get a value returned, or change it in the html. 

#### Making every character type appear at least once
The optionsArray containing all characters selected was changed by using push to make it a set of sub arrays, each with one type of characters. This then allows you to count how many types were selected (how many sub arrays), create a password missing this many characters, and create a loop to select a random item from each of these subarrays and add it to the password. 

### still displaying added characters if no length added
a new error message was introduced if invalid length input added. 

## Probability note
Due to the workaround to make every character appear at least once creating a nested array, and the fact the each subarray has a different number of items (10 digits, 26 for alphabets...)  it is less likely that a particular letter would be chosen than a particular number. The flip side of this argument is that it makes it more likely there will be an equal number of each character type selected.
You could create an array with all possible characters not in nested arrays and choose from this for a selector that weighs each character, instead of each type, equally. 

## License

MIT License
