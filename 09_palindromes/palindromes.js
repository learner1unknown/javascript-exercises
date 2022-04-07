const palindromes = function (string) {

// remove all spaces and nonalphanumeric characters 
// make string lowercase and break up into characters -> this is the original string
// reverse the original string and store in separate variable
// compare original string and reversed string, if equal = true i.e. is a palindrome

string = string.replace(/\W|_/g, '');
string = string.toLowerCase();
string = string.split('');

let reversed = [];

for (let i = 0; i <= string.length; i++) {
    reversed[i] = string[string.length - i];
}

return reversed.join('') == string.join('')

};

// Do not edit below this line
module.exports = palindromes;
