"use strict";
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = 'hello';
let back = `hello`;
const person = {
    name: 'Jack',
    age: 21,
};
const fruits = ['Apple', 'Banana', 'Grape', 1];
const book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.SHORT,
};
let unionType = 10;
unionType = 'hello';
const apple = 'apple';
let clothSize = 'small';
const cloth = {
    color: 'white',
    size: 'medium',
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('Hello!');
    return;
}
console.log(sayHello());
let tmp;
const anotherAdd = function (num1, num2) {
    return num1 + num2;
};
const doubleNumber = (num) => num * 2;
function doubleAndHand(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHand(21, (doubleNum) => {
    return doubleNum;
});
