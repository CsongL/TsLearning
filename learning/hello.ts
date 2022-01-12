class person{
    constructor(){}
    public print(){
        console.log('你好');
        console.log('hh');
    }
}
let p = new person();
p.print()

let list: number[] = [1,2,3];
console.log(list);
let list2: Array<number> = [1,2,3];
console.log(list2);

//  Enum
enum Direction{
    NORTH,
    SOUTH,
    EAST,
    WEST,
}

let dir: Direction = Direction.NORTH;
console.log(Direction.EAST);

enum Direction1{
    NORTH = 3,
    SOUTH,
    EAST,
    WEST,
}
console.log(Direction1.SOUTH);
console.log(Direction1[4]);

enum Direction2{
    NORTH = "North",
    SOUTH = "South",
    EAST = "EAST",
    WEST = "WEST",
}
console.log(Direction2.EAST);

const enum Direction3{
    NORTH=4,
    SOUTH,
    EAST,
    WEST,
}
let dir3: Direction3 = Direction3.NORTH;
console.log(Direction3.EAST);

enum Direction4{
    A,
    B,
    C = "C",
    D = "D",
    E = 1,
    F,
}
console.log(Direction4.E);
console.log(Direction4.D);

let tupleType: [string, boolean];
tupleType = ["semlinker", true];