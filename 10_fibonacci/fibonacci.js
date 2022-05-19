const fibonacci = function(arg) {
let num = parseInt(arg);
if (num <0){
    return "OOPS";
}
let fib = [0, 1];
    for (let i = 1; i < num; i++){
let nextFib = fib[i-1]+fib[i];
fib.push(nextFib);
}
return fib.pop();
};

// Do not edit below this line
module.exports = fibonacci;
