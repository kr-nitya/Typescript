//Specify type to string
var name1 = [];
name1.push("Nitya");
name1.push("123");
console.log(name1);
//Use of readonly == > Only one time add
var oneTime = [1, 2];
//oneTime.push(23); //Can not add because it is readonly
console.log(oneTime);
//Inference ==> Detect type automatically
var numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
//numbers.push("abc"); //error
console.log(numbers);
var head = numbers[0];
console.log(head);
//Typed Array == Tuple
var ourTuple;
ourTuple = [5, false, "Hello"];
ourTuple.push("How are you?"); //Last index type is string that's why we can add multiple value of type string
console.log(ourTuple);
//Tuple readonly
var ourReadonlyTuple = [5, true, "hello"];
// throws error as it is readonly.
// ourReadonlyTuple.push('hi');
//Named Tuples
var graph1 = [55.2, 41.3];
console.log(graph1);
//Destructuring Tuples
var graph = [55.2, 41.3];
var x1 = graph[0], y1 = graph[1];
console.log(x1);
console.log(y1);
