const add = function(num1, num2) {
 return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(arg) {
  let sum = 0;
  for (let i = 0; i < arg.length; i++) {
    sum +=arg[i];
  }
  return sum;
};

const multiply = function(arg) {
  let mult = 1;
  for (let i = 0; i < arg.length; i++) {
    mult *= arg[i];
  }
  return mult;
};

const power = function(num1, pow) {
	return (num1**pow);
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  let fact = 1;
  for (let i = 1; i<=num; ++i){
    fact *= i;
  }
  return fact;
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
