// var numbers = [65, 44, 12, 4];

// function getSum(total, num) {
//   return total + num;
// }

// let calc = numbers.reduce(getSum);
// console.log(calc);

// var splitInteger = function(num, parts) {
//   // Complete this function
//   var partsArray = [];
//   if (num > parts) {
//     for (i = 1; i <= parts; i++) {
//       var numDivided = num % parts;
//       partsArray[i].push(numDivided);
//     }
//   }
//   return partsArray;
// };

// let answer = splitInteger(10, 5);
// console.log(answer);

// function sayHello(name) {
//   // You can print to STDOUT for debugging like you normally would:
//   name = "Hello, " + name + "!";
//   console.log(name);

//   // but you need to return the value in order to complete the challenge
//   return name; // TODO: return the correct value
// }

// let result = sayHello("Tim");
// console.log(result);

var items = {};

var item_name = "Mango";
var quantity = 3;

Object.defineProperty(items, item_name, {
  value: quantity,
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(items);
console.log("========");
let firstName = "Timothy";
console.log(firstName);

const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

let age = 30;
let selectedColor = null;

//Person object
let person = {
  name: "Mosh",
  age: 30,
  walk() {
    console.log(this);
  }, //method inside an object
  talk() {}
};

const targetMember = "school";
person[targetMember.value] = "sss";
console.log("---Target Member School---");
console.log(person[targetMember.value]);
var x;
for (x in person) {
  console.log(x);
}
//walk(); //it will not work fine, instead use the bind method

const walk = person.walk.bind(person);
walk();

//Dot Notation
person.walk();
person.name = "Tim"; //or

//Bracket Notation
person["name"] = "Mary"; //or

let selection = "name";
person[selection] = "Mary";

console.log(person.name); //or
//console.log(person["name"]); or

//Arrays
let selectedColors = ["red", "blue"]; //empty array = []
console.log(selectedColors[0]);

selectedColors[2] = "green"; //lenght is dynamic, you can add elements on the fly
console.log(selectedColors.length);

//Performing a task
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("John", "Smith");

//Calculate a value
function square(number) {
  return number * number;
}

//or es6
let square2 = number => {
  return number * number;
};

//or even smaller
let square3 = number => number * number;

// let number =
square(2);
// console.log(number);

console.log(square(2));
console.log(square2(3));
console.log(square3(4));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];

// const activeJobs = jobs.filter(function(job) {
//   return job.isActive;
// });
//Better still using es6
const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);

//new concatenation with calculation also
let name = "Bucky";

console.log("My favorite is " + name + " in Avengers");
//better way es6
console.log(`My favorite is ${name} in Avengers`);
let a = 5;
let b = 7;
console.log(`My person is ${a + b} is Bucky`);

//Adding numbers
function AddNumbers(a, b, c) {
  console.log(a + b + c);
}

var nums = [3, 4, 5];
AddNumbers(nums[0], nums[1], nums[2]);

//call the function using es6 spread method instead
AddNumbers(...nums);

//combine two arrays using the spread method instead of looping and adding
var meats = ["ham", "bacon"];
var foods = ["rice", ...meats, "wheat", "beans", "yam"];
console.log(foods);

//Creating Classes
class Person {
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  displayWeight() {
    console.log(this.weight);
  }

  displayName() {
    console.log(this.name);
  }
}

class Programmer extends Person {
  constructor(name, age, weight, language) {
    super(name, age, weight);
    this.language = language;
  }

  displayLanguage() {
    console.log(this.language);
  }
}

//let bucky = new Person("Bucky", 30, 3.4);
let sally = new Person("Sally", 25, 5.4);

//bucky.displayWeight();
sally.displayName();
sally.displayWeight();

let bucky = new Programmer("Bucky", 30, 3.5, "Javascript");
bucky.displayName();
bucky.displayWeight();
bucky.displayLanguage();
