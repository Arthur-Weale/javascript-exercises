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
  let newValue = 1
	arr = [];
  arr.push(value1)
  for(value in _Range(arr)){
    newValue = newValue * value;
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
