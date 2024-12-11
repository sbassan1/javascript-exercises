const palindromes = function (str) {

    str = str.toLowerCase();
    const cleanString = (str => str.replace(/[^a-zA-Z0-9]/g, ''));
    const newStr = cleanString(str);

    return (newStr == newStr.split('').reverse().join(''));

};

// Do not edit below this line
module.exports = palindromes;
