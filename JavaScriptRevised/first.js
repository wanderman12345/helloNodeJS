// let is similar to var and const. Const cannot be changed
// console.log prints to console
// some common data types are string, int and bool.

const name = "Max";
let age = 29;
const Hot = true;

console.log(name);

// Arrow function is a shorter way than fucntion summarizeUser (){} Also can be used with this keyword

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

const addOne = (a) => a + 1;

console.log(summarizeUser("Mathew", 20, Hot));
console.log(addOne(5));
