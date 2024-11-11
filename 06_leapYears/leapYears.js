const leapYears = function(year) {
    //Checks if year is divisible and leaves no remainders.
    if(year % 4 == 0 && year % 100 != 0|| year % 4 == 0 &&  year % 100  == 0 &&  year % 400 == 0 ){
        return true;//Returns true 
    }else if(year % 4 != 0 || year % 4 == 0 && year % 100 == 0){
        return false;
    }
};
// Do not edit below this line
module.exports = leapYears;
