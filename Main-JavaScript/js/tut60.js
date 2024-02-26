console.log("Hey Welcome to tut59.js in this tut we can learn --JavaScript Destructuring in JavaScript--")

let a, b;
[a, b] = [500,600];
// console.log(a, b);

// [a, b,c, ...d] = [1,2,3,4,5,6,7,8,9,10];

// console.log(a,b,c,d);
// console.log(b)
// console.log(c)
// console.log(d)


// ------Array Destructering-------//

const fruits = ["Apple","Bannana","Mango","Graphs"];
console.log(fruits);
[a,b,...c] = fruits;
console.log(a,b,c);

// Object Destructring--

const laptop = {
    model: "ASUS TUF Gaming",
    age: "2years",
    Specfication: "Hard Core Gaming",
    Refresh_Rate:"144Hz",
    start:function(){console.log("I am Started")}
}
console.log(laptop);

const{model,age,Specfication,Refresh_Rate,start} = laptop;
console.log(model,age,Specfication,Refresh_Rate,start);
start();