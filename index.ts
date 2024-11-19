let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = 'hello';
let back: string = `hello`;

const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 21,
};

const fruits: any[] = ['Apple', 'Banana', 'Grape', 1];
const book: [string, number, boolean] = ['business', 1500, false];

enum CoffeeSize {
  SHORT,
  TALL,
}

const coffee = {
  hot: true,
  size: CoffeeSize.SHORT,
};
let unionType: number | string = 10;
unionType = 'hello';

const apple = 'apple';

let clothSize: 'small' | 'medium' | 'large' = 'small';
const cloth: {
  color: string;
  size: 'small' | 'medium' | 'large';
} = {
  color: 'white',
  size: 'medium',
};

function add(num1: number, num2: number) {
  return num1 + num2;
}

function sayHello(): void {
  console.log('Hello!');
  return;
}

console.log(sayHello());
let tmp: undefined;

const anotherAdd: (n1: number, n2: number) => number = function (num1, num2) {
  return num1 + num2;
};
const doubleNumber: (num: number) => number = (num) => num * 2;

function doubleAndHand(num: number, cb: (num: number) => void): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHand(21, (doubleNum) => {
  return doubleNum;
});

function echo(message: string): string | null {
  return message;
}
let implictAny;
implictAny = 'implictAny';

let nullableMessage = echo('h1');
if (nullableMessage) {
  nullableMessage.toLocaleUpperCase();
}
