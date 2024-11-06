const add = function(value1,value2) {
  return value1 + value2;
};

const subtract = function(value1,value2) {
	return value1 - value2;
};

const sum = function(arr) {
  let runningTotal = 0;
	for(value of arr){
    runningTotal = runningTotal + value;
  }
  return runningTotal;
};

const multiply = function(arr) {
  let runningMultiple = 1
  for(value of arr){
    runningMultiple = runningMultiple * value;
  };
  return runningMultiple;
};

const power = function(value1,value2) {
	return value1 ** value2;
};

const factorial = function(value1) {
  if (value1 == 0) {
    return 1;
  }else
    newValue = value1;
    for(let i = 1; i < value1; i++){
      newValue = newValue * i;
    }
  return newValue;
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
