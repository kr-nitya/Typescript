//Specify type to string
const name1: string[] = [];
name1.push("Nitya");
name1.push("123");
console.log(name1);
//Use of readonly == > Only one time add
const oneTime: readonly number[] = [1, 2];
//oneTime.push(23); //Can not add because it is readonly
console.log(oneTime);

//Inference ==> Detect type automatically
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
//numbers.push("abc"); //error
console.log(numbers);
let head: number = numbers[0];
console.log(head);

//Typed Array == Tuple
let ourTuple: [number, boolean, string];
ourTuple = [5, false, "Hello"];
ourTuple.push("How are you?"); //Last index type is string that's why we can add multiple value of type string
console.log(ourTuple);

//Tuple readonly
let ourReadonlyTuple: readonly [number, boolean, string] = [5, true, "hello"];
// throws error as it is readonly.
// ourReadonlyTuple.push('hi');

//Named Tuples
const graph1: [x: number, y: number] = [55.2, 41.3];
console.log(graph1);

//Destructuring Tuples
const graph: [number, number] = [55.2, 41.3];
const [x1, y1] = graph;
console.log(x1);
console.log(y1);
