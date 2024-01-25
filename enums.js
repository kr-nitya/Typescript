var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.West;
console.log(currentDirection);
// throws error as 'North' is not a valid enum
//currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
var Color;
(function (Color) {
    Color[Color["black"] = 2] = "black";
    Color[Color["blue"] = 3] = "blue";
    Color[Color["red"] = 4] = "red";
})(Color || (Color = {}));
console.log("Black Number", Color.black);
console.log("Red Number", Color.red);
//Fully Intialized
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
//String Enums
var colors;
(function (colors) {
    colors["red"] = "red";
    colors["pink"] = "pink";
})(colors || (colors = {}));
console.log(colors.pink);
