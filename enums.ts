enum CardinalDirections {
  North,
  East,
  South,
  West,
}
let currentDirection = CardinalDirections.West;
console.log(currentDirection);
// throws error as 'North' is not a valid enum
//currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.

enum Color {
  black = 2,
  blue,
  red,
}
console.log("Black Number", Color.black);
console.log("Red Number", Color.red);

//Fully Intialized
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
//String Enums
enum colors {
  red = "red",
  pink = "pink",
}
console.log(colors.pink);
