const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

//Passes in personObject with destructured syntax takes name field of person object

const printName = ({ name }) => {
  console.log(name);
};

//two constants name and age that match name and age of person (Object Destructuring)
const { name, age } = person;


console.log(name);
console.log(age);

printName(person);

const hobbies = ['Sports', 'Cooking'];

//Array Destructuring. Here names can be anything as elements within an array are pulled by position.
const [hobby1, hobby2] = hobbies
console.log(hobby2)
