// let is similar to var and const. Const cannot be changed
// console.log prints to console
// some common data types are string, int and bool.

const name = "Max";
let age = 29;
const Hot = true;

console.log(name);

// Arrow function is a shorter way than fucntion summarizeUser (){} Also can be used with this keyword. Where this is global. If
// want this to be local you must use the function keyword or remove :

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    " and is " +
    userAge +
    " Years old and he is hot: " +
    userHasHobby
  );
};

const addRandom = () => 1 + 2;

const addOne = (a) => a + 1;

console.log(summarizeUser("Mathew", 20, Hot));
console.log(addOne(5));
console.log(addRandom());

//Objects in Java

const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

person.greet();

//Arrays

//Here the const is the address ie pointer. The address does not change but values within the array can change.
const hobbies = ["Sports", "Cooking"];

//going through hobbies array

for (let hobby of hobbies) {
  console.log(hobby);
}

console.log(hobbies);

//Using the map feature
console.log(hobbies.map((hobby) => "Hobby: " + hobby));

//This adds to existing array
hobbies.push("Programming");
console.log(hobbies);

//This copies an arary. Here the slice does not have arguments therefore entire array is copied.
//This is the spread operator
const copiedAgainArr = [...hobbies];

// console.log(copiedArray);
console.log(copiedAgainArr);

//Rest operator with 3 dots
const toArr = (...args) => {
  return args;
};
console.log(toArr(1, 2, 3, 4, 5));
