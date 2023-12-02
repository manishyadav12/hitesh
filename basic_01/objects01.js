let mySym = Symbol("hello");

let info = {
  name: "Manish",
  age: 21,
  val: [1, 2, 3, 4],
  [mySym]: "hi",
};

console.log(info[mySym]);
console.log(info.name);
console.log(info.age);
console.log(info[val]);
