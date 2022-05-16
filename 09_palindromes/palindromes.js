const palindromes = function (string) {

// remove all spaces and nonalphanumeric characters 
// make string lowercase and break up into characters -> this is the original string
// reverse the original string and store in separate variable
// compare original string and reversed string, if equal = true i.e. is a palindrome

string = string.replace(/\W|_/g, '');
string = string.toLowerCase();
newString = string.split('');
let reversed = newString.reverse();
reversed = reversed.join('');


return string === reversed;

};

// Do not edit below this line
module.exports = palindromes;
