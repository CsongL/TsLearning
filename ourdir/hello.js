class person {
    constructor() { }
    print() {
        console.log('你好');
        console.log('hh');
    }
}
let p = new person();
p.print();
let list = [1, 2, 3];
console.log(list);
let list2 = [1, 2, 3];
console.log(list2);
//  Enum
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["EAST"] = 2] = "EAST";
    Direction[Direction["WEST"] = 3] = "WEST";
})(Direction || (Direction = {}));
let dir = Direction.NORTH;
console.log(Direction.EAST);
var Direction1;
(function (Direction1) {
    Direction1[Direction1["NORTH"] = 3] = "NORTH";
    Direction1[Direction1["SOUTH"] = 4] = "SOUTH";
    Direction1[Direction1["EAST"] = 5] = "EAST";
    Direction1[Direction1["WEST"] = 6] = "WEST";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.SOUTH);
console.log(Direction1[4]);
var Direction2;
(function (Direction2) {
    Direction2["NORTH"] = "North";
    Direction2["SOUTH"] = "South";
    Direction2["EAST"] = "EAST";
    Direction2["WEST"] = "WEST";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.EAST);
let dir3 = 4 /* NORTH */;
console.log(6 /* EAST */);
var Direction4;
(function (Direction4) {
    Direction4[Direction4["A"] = 0] = "A";
    Direction4[Direction4["B"] = 1] = "B";
    Direction4["C"] = "C";
    Direction4["D"] = "D";
    Direction4[Direction4["E"] = 1] = "E";
    Direction4[Direction4["F"] = 2] = "F";
})(Direction4 || (Direction4 = {}));
console.log(Direction4.E);
console.log(Direction4.D);
