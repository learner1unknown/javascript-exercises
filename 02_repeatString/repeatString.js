const repeatString = function(string, num) {

    let word = []

    if (num < 0) {
        return 'ERROR'
    }
    else {

    for (let i = 0; i < num; i++) {
        word.push(string);
    }

    return word.join('')
    }
    
};

// Do not edit below this line
module.exports = repeatString;
