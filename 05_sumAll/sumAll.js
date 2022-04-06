const sumAll = function(start, end) {

    let counter = 0;
    let begin;
    let finish;

    // ensure only numbers are entered
    if (typeof(start) == 'number' && typeof(end) == 'number') {

        if (start < 0 || end < 0) {
            return 'ERROR'
        }
        else if (end > start) {
            begin = start;
            finish = end;
        }
        else if (end <= start){
            begin = end;
            finish = start;
        }
       

    } else { return 'ERROR'}

    for ( let i = begin ; i <= finish; i++) {
        counter = counter + i;
    }

    return (counter);

};

// Do not edit below this line
module.exports = sumAll;
