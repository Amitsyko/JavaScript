console.log("Hey Welcome to tut43.js in this tut we can learn Async & Await Fucntions in JavaScript");

/*
async function amit(){
    console.log("Started Amit function");
    const response = await fetch("https://api.github.com/users");   
    console.log("End Amit function");
    const user = await response.json(); 
    console.log("User resolved");
    return user;
}

console.log("Before calling Amit Function");
let a = amit();
console.log("After calling Amit Function");
console.log(a);
a.then(data => console.log(data));
console.log("Last line of the js file");
*/



async function amit(){
    // console.log("i am started");
  const response = await fetch('https://api.github.com/users');
  const user = await response.json();
  return user;
}

let a = amit();
console.log(amit());
a.then(data => console.log(data));