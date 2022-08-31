// const sum = (a :number, b :number) => {
//     return a + b;
// }

// const answer = sum(4, 5);

// console.log(answer);

let isCool: boolean = true;

// number

let age: number = 56;

// string

let eyeColor: string = 'brown';
let favouriteQuote: string = `I'm not old, I'm only ${age}`;

// Array

let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

//Object

let wizard : object = {
    a: 'John'
}

// null and udnefined

let meh: undefined = undefined;
let noo: null = null;

// Tuple

let basket: [string, number];
basket = ['basketball', 5];

// Enum

enum Size {
    Small = 1,
    Medium = 2,
    Large = 3
}

let sizeName: string = Size[2];
console.log(sizeName);

// Any

let whatever: any = 'gasgasggsasg nooooooo';
whatever = basket

// Void

let sing = (): void => {
    console.log('lalala');
}

// Never

let error = (): never => {
    throw Error('oops');
}

// Interface

interface RobotArmy {
    count: number,
    type: string,
    magic?: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHT');
}
fightRobotArmy({count: 1, type: 'dragon'});
let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log('FIGHT');
}

// Class

class Animal {
    public sing: string = 'lalala';
    constructor(sing: string) {
        this.sing = sing;
    }

    greet() {
        return `Hello ${this.sing}`;
    }
}

let lion = new Animal('Raaawwwwrrrr');
lion.sing

// Union

let confused: string | boolean = true;

let x: number = 4;