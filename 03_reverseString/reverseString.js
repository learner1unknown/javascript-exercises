const reverseString = function(word) {

    // split string up
    // reverse string
    // join reversed string

    word = word.split('');
    let reversed_word = [];

    for (let i = 0; i < word.length + 1; i++) {
        reversed_word[i] = word[word.length - i];
    }

    return reversed_word.join('')


};

// Do not edit below this line
module.exports = reverseString;
