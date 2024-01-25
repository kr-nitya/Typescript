// the `: number` is return type
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function printHello() {
    console.log("Hello!");
}
printHello();
//Function Parameter
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 2));
//Optional Parameter
function add(a, b, c) {
    return a + b + (c || 0); //Here C is OR with 0
}
console.log(add(2, 2));
//Default Parameter
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(pow(2, 3));
