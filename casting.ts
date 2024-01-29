let x: unknown = 'hello';
console.log((x as number));
//console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string'
//Casting with <>
let num:unknown = 23;
console.log((<number>num).toString());
//Force casting = Error
// let x = 'hello';
// console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined 