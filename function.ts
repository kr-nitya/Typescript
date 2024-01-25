// the `: number` is return type
function getTime(): number {
  return new Date().getTime();
}
console.log(getTime());

function printHello(): void {
  console.log("Hello!");
}
printHello();
//Function Parameter
function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(2, 2));
//Optional Parameter
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0); //Here C is OR with 0
}
console.log(add(2, 2));
//Default Parameter
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}
console.log(pow(2,3));