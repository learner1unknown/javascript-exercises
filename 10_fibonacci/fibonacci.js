const fibonacci = function(n) {

    if (typeof(n) == 'number') {
        if (n > 0) {
    let Phi = (1+5**(1/2))/2;
    let phi = (1-5**(1/2))/2;

    return Math.round((Phi**n - phi**n) / 5**(1/2))
        }
        else {return 'OOPS'}
    }
    else {return 1}
};

// Do not edit below this line
module.exports = fibonacci;
