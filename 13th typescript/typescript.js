// const sum = (a :number, b :number) => {
//     return a + b;
// }
// const answer = sum(4, 5);
// console.log(answer);
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'brown';
var favouriteQuote = "I'm not old, I'm only ".concat(age);
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
//Object
var wizard = {
    a: 'John'
};
// null and udnefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
console.log(sizeName);
// Any
var whatever = 'gasgasggsasg nooooooo';
whatever = basket;
// Void
var sing = function () {
    console.log('lalala');
};
// Never
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT');
};
fightRobotArmy({ count: 1, type: 'dragon' });
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT');
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sing) {
        this.sing = 'lalala';
        this.sing = sing;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal('Raaawwwwrrrr');
lion.sing;
// Union
var confused = true;
var x = 4;
