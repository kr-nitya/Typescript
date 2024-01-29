var pointPart = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
console.log(pointPart.x);
var myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
//Record is a shortcut to defining an object type with a specific key type and value type.
var nameAgeMap1 = {
    'Alice': 21,
    'Bob': 25
};
console.log(nameAgeMap1);
