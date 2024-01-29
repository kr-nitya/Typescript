//Partial changes all the properties in an object to be optional.
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
console.log(pointPart.x);

//Required changes all the properties in an object to be required.

interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // `Required` forces mileage to be defined
};
//Record is defining an object type with a specific key type and value type.
const nameAgeMap1: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};
console.log(nameAgeMap1);

