var a = "1";
console.log("Hello", a);
var firstName = "Nitya";
console.log(firstName);
//Use of any ==> it disables type checking
var v = true;
v = "string";
console.log("Use of any = ", v);
var userInput;
userInput = 5;
console.log("Input is a number:", userInput); // OK
userInput = "Hello";
console.log("Input is a string:", userInput); // OK
// Attempting to use unknown without type-checking will result in a compilation error
// Uncommenting the following line would cause a TypeScript error:
//console.log(userInput.length); // Error: Object is of type 'unknown'.
var y = undefined;
console.log(typeof y);
var z = null;
console.log(typeof z);
