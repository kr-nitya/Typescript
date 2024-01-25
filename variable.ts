const a = "1";
console.log("Hello", a);
//String type variable
let firstName: string = "Nitya";
console.log(firstName);

//Use of any ==> it disables type checking
let v: any = true;
v = "string";
console.log("Use of any = ", v);
//Unknown
let userInput: unknown;
userInput = 5;
console.log("Input is a number:", userInput); // OK

userInput = "Hello";
console.log("Input is a string:", userInput); // OK
//console.log(userInput.length); // Error: Object is of type 'unknown'.
let y: undefined = undefined;
console.log(typeof y);

let z: null = null;
console.log(typeof z);
