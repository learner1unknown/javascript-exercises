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
  let answer = 0;

  for (let i = 0; i < args.length; i++) {
    answer = answer + args[i];
  }

  return answer
	
};

const multiply = function(array) {

  let answer = 1;
  for (let i = 0; i <array.length; i++) {
    answer = answer * array[i];
  }
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
