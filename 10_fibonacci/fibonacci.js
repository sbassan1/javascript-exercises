const fibonacci = function(x) {

    let a = 0;
    let b = 1;

    let c = 1;

    if( x < 0){
        return "OOPS";
    }

    if(x == 0){
        return a;
    }

    for(let i = 1 ; i < x ; i++){
        c = a+b;
        a = b;
        b = c;
    }

    return c;

};

// Do not edit below this line
module.exports = fibonacci;
