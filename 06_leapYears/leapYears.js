const leapYears = function(number) {

    if (number % 4 == 0 && ( !(number % 100 == 0) || number % 400 == 0)) return true;

    return false;
};

// Do not edit below this line
module.exports = leapYears;
