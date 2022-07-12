//Asynchoronous Code as it does not happen immediately

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
        .then(Text => {
      console.log(Text)
      return fetchData();
  })
        .then(Text2 =>{
        console.log(Text2);

  });
}, 2000);

//Javascript and NodeJS does not block code until its done. It will execute snychronous code first
//and then willexecute asynchronous codeonce completed

console.log("Hello");
console.log("Hi");
