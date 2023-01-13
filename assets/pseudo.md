1. prompt password length `lengthRequired`
10 <=`lengthRequired` <= 64

2. 4 confirms for using lowercase, uppercase, numeric, special
use `lowerRequired` `upperRequired` `numericRequired` `specialRequired`
At least one of the 4 must be selected. could have counter for `typeCount`
or array for `typesSelected`

3. make array `allChars` of all characters from selected types. 
concatenator function? 


 and randomly select from `allChars` and add to new string for password until `lengthRequired` reached