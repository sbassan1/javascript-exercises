const sumAll = function(numA,numB) {
    let sum = 0;

    if (!Number.isInteger(numA) || !Number.isInteger(numB)) return "ERROR";
    if (numA < 0 || numB < 0) return "ERROR"

    let min;
    let max;

    if(numA < numB) { 
        min = numA;
        max = numB;
    } else { 
        min = numB; 
        max = numA; 
    }

    for(let i = min ; i <= max ; i++){
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
