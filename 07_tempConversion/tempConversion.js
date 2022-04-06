const ftoc = function(farhenheit) {

  let celsius = (farhenheit - 32) * 5/9;
 
  return Number(celsius.toFixed(1))


};

const ctof = function(celsius) {

  let farhenheit = celsius * 9/5 + 32;

  return Number(farhenheit.toFixed(1))

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
