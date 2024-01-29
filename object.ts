//Typed Object ==> Sepcify data type
type Obj1 = { name: string; age: number }
const obj: Obj1 = {
  name: "Nitya",
  age: 21,
};
console.log(obj);
//Type Inference ==> Automatically detect data type
const car = {
  type: "Toyota",
};
car.type = "Ford"; // no error
//car.type = 2; // Error: Type 'number' is not assignable to type 'string'.

//Optional Property
//Error beacase does not assign mileage value
// const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//     type: "Toyota",
//   };
//car.mileage = 2000;

const car1: { type: string; mileage?: number } = {
  // no error
  type: "Toyota",
};
car1.mileage = 2000;
console.log(car1);
//Index Signatures [index:string] ==> Index data type and value type is number
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'. 