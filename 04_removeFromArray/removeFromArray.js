const removeFromArray = function() {

    let args = Array.from(arguments);
    array = args[0];
    args.shift();

    let results = array.filter((array) => !args.includes(array));
    
    return results

};

// Do not edit below this line
module.exports = removeFromArray;
