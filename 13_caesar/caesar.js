const caesar = function() {

    const string = arguments[0];
    let code = arguments[1];
    //making sure code is betweeen 26 and -26 
    if (code > 26 || code < -26) {
        code = code - Math.round(code/26)*26;
    }
  
    const letters = string.split('');

    const ascii = letters.map(letter => {

        let number = letter.charCodeAt();
        
        if( number >= 65 && number <= 90) {
            // change UPPER case letter 
            number = number + code;
            // check if adding number will exceed 90 = 'Z' if it does remove 26
            if(number > 90) {
                number = number - 26;
            }
            // check if adding number will be less than 65 = 'A' if it does add 26
            else if(number < 65) {
                number = number + 26;
            }
        }
        else if ( number >= 97 && number <= 122) {
            // change lower case letter
            number = number + code;
            // check if adding number will exceed 122 = 'z' if it does remove 26
            if(number > 122) {
                number = number - 26;
            }
            // check if adding number will be less than 97 = 'a' if it does add 26
            else if(number < 97) {
                number = number + 26;
            }
        }

        // keep number the same if it is not a letter as it is a non alphabetic character

        return number
    })

    return String.fromCharCode.apply(String, ascii)
};

// Do not edit below this line
module.exports = caesar;
