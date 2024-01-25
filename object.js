//Typed Object ==> Sepcify data type
var obj = {
    name: "Nitya",
    age: 21,
};
console.log(obj);
//Type Inference ==> Automatically detect data type
var car = {
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
var car1 = {
    // no error
    type: "Toyota",
};
car1.mileage = 2000;
console.log(car1);
