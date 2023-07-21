function add(a,b){
   return a+b 
}
function multiply(a,b){
    return a*b
}
function subtract(a,b){
    return a-b
}
function divide(a,b){
    return a/b
}

function increment(n){
    return n+=1
}

function decrement(n){
    return n-=1
}

function makeInt(f){
    return parseInt(f,10)
}

function preserveDecimal(f){
    return parseFloat(f,10);
}

// test result:

console.log(add(2,3));
console.log(multiply(2,3));
console.log(subtract(2,3));
console.log(divide(2,3));
console.log(increment(3));
console.log(decrement(3));
console.log(makeInt("3.2222"));
console.log(makeInt("33 sorour"));
console.log(preserveDecimal("3.123"));
