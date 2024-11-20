// interface Human {
//   name: string;
//   age: number;
//   greeting(message: string): void;
// }

// class Developer implements Human {
//   constructor(public name: string, public age: number, public experience: number) {}
//   greeting(message: string) {
//     console.log('Hello!');
//   }
// }

// const user: Human = new Developer('Quill', 38, 3);

// let obj: { readonly name: string; age?: number };
// obj = { name: 'John' };

// const obj = {
//   a: 1,
//   b: 2,
//   sum(): number {
//     return this.a + this.b;
//   },
// };
// console.log(obj.sum());]

// let obj: { [key: string]: number };
// obj = { key1: 1, key2: 2 };
// console.log(obj['key1']);
// console.log(obj['key2']);

// type Octopus = {swims: boolean};
// type Cat = {nightVision: boolean};
// type Octocat = Octopus & Cat;

// const octocat: Octocat = {swims: true, nightVision: true};
// console.log(octocat);
