const add = function(value1,value2) {
  return value1 + value2;//Adds the first value and the second value.
};

const subtract = function(value1,value2) {
	return value1 - value2;//Subtracts the first with the second values.
};

const sum = function(arr) {
  //let runningTotal = 0;//Re-initialises the running total varible to zero.
	//for(value of arr){ //Loop iterates through the elements in the array using for...of type array.
  //  runningTotal = runningTotal + value;//Adds running total to value.
  //}
  //return runningTotal;// returns updated running total.
  return arr.reduce((runningTotal, currentValue) => 
    runningTotal + currentValue
  ,0)
};

const multiply = function(arr) {
  //let runningMultiple = 1;//Re-initialises the running multiple to 1.
  //for(value of arr){//Loop iterates through the elements in the array.
  //  runningMultiple = runningMultiple * value;//Performs multiplying mathematical process using the astericks operater *.
  //};
  //return runningMultiple;//Returns updated running Multiple variable.
  return arr.reduce((runningTotal, currentValue) => 
    runningTotal * currentValue
  ,1)
};

const power = function(value1,value2) {
	return value1 ** value2;//Performs to the power mathematical operation.
};

const factorial = function(value1) {
  if (value1 == 0) {
    return 1;
  }else
    newValue = value1;//Re-initialises the newValue to value1 the that is going to parsed.
    for(let i = 1; i < value1; i++){
      newValue = newValue * i;//Perfoms factorial mathematical operation n(n-1)+(n-2).
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
