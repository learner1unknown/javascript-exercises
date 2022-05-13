const add = function() {

  let args = Array.from(arguments);

  return args[0] + args [1]
	
};

const subtract = function() {

  let args = Array.from(arguments);

  return args[0] - args [1]
	
};

const sum = function() {

  let args = Array.from(arguments);
  let answer = args.reduce((value1, value2) => value1+value2, 0)
  return answer
	
};

const multiply = function(array) {

  let args = arguments[0];
  let answer = args.reduce((value1, value2) => value1*value2, 1)
  return answer
};

const power = function() {

  let args = Array.from(arguments);
  let answer = args[0] ** args[1];

  return answer
	
};

const factorial = function(number) {

  // recursive method
  if(number == 0 || number == 1){
    return 1;
  }
  else{
    return number * factorial(number - 1);
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
