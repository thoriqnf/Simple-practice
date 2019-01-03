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

// Template Literal
const horse = {
  name: "Topher",
  size: "large",
  skills: ["jousting", "racing"],
  age: 7
};

// Bad Code
let bio =
  horse.name +
  " is a " +
  horse.size +
  "has skills" +
  horse.skills +
  "has age" +
  horse.age;

// Good Code
const { name, size, skills } = horse;

bio = `${name} is a ${size} ${skills.join(" & ")}`;

console.log(bio);

// Advanced Tag Example
function horseAge(str, age) {
  const ageStr = age > 5 ? "old" : "young";
  return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge`this horse is ${horse.age}`;

// Spread Syntax

// Objects
const pikachu = { name: "Pikachu" };
const stats = { hp: 40, attack: 60, defense: 45 };

// Bad Code
pikachu["hp"] = stats.hp;
pikachu["attack"] = stats.attack;
pikachu["defense"] = stats.defense;

// OR

const lv10 = Object.assign(pikachu, stats);
const lv11 = Object.assign(pikachu, { hp: 45 });

// Good Code
const lv10 = { ...pikachu, ...stats };
const lv11 = { ...pikachu, hp: 45 };

// In Arrays
let pokemon = ["Arbok", "Raichu", "Sandshrew"];

// Bad Code
pokemon.push("Bulbasaur");
pokemon.push("Metapod");
pokemon.push("Weedle");

//Good Code
// Push
pokemon = [...pokemon, "Bulbasaur", "Metapod", "Weedle"];

// Shift
pokemon = ["Bulbasaur", "Metapod", "Weedle", ...pokemon];

// Loops
const order = [500, 30, 99, 15, 223];

// Bad Code
const total = 0;
const withTax = [];
const highValue = [];
for (i = 0; i < onvrdisplaypresentchange.length; i++) {
  // Reduce
  total += orders[i];

  // Map
  withTax.push(orders[i] * 1.1);

  // FIlter
  if (orders[i] > 100) {
    highValue.push(orders[i]);
  }
}
 
// Good Code

// Reduce
const total = orders.reduce((acc, cur) => acc = cur)

// Map
const withTax = orders.map(v => v 1*1)

// Filter
const highValue = orders.filter( v => v > 100); 