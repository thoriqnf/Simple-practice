//how to console.log

const foo = { name: "tom", age: 30, nervous: false };
const bar = { name: "dick", age: 40, nervous: false };
const baz = { name: "harry", age: 50, nervous: true };

// bad code

console.log(foo);
console.log(bar);
console.log(baz);

// Compunted Property Names
console.log({ foo, bar, baz });

// Can give style to console.log
console.log("%c My Friends", "color: orange; font-weight: bold");
//%c buat ganti warnanya

// console.table
console.table([foo, bar, baz]);

// console.time
console.time("looper");
let i = 0;
while (i < 100000) {
  i++;
}
console.timeEnd("looper");

// Stack Trace logs
const deleteMe = () => console.trace("bye bye database");

// Destructuring

const turtle = {
  name: "Bob",
  legs: 4,
  shell: true,
  type: "amphibi",
  meal: 10,
  diet: "berries"
};

// Bad Code
function feed(animal) {
  return `feed ${animal.name} ${animal.meal}`;
}

function feed({ name, meal, diet }) {
  return `Feed ${name} ${meal} ${diet}`;
}

function feed(animal) {
  const { name, meal, diet } = animal;
  return `Feed ${name} ${meal} ${diet}`;
}
