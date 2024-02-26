console.log("Hey Welcome to tut59.js in this tut we can learn --JavaScript Symbols in JavaScript--")

const sym = Symbol();
// console.log(typeof sym);

const sym1 = Symbol("Hello Amit Vishwakarma");
// console.log(sym1);


const sym2 = Symbol("This can be good");
const sym3 = Symbol("This can be good");
//This can be return in false  beacuse the values are same--
console.log(sym2 === sym3);


const a = "Amit";
const b = "Amit";
//This can be return in true  beacuse the values are same--
// console.log(a===b);


const k1 = Symbol("identifer of k1");
const k2 = Symbol("identifer of k2");

myObj = {}
myObj[k1] = 'Hello SweetHeart';
myObj[k2] = 'You are my baby';
myObj["name"] = "Annu";
myObj[4] = "Annu Patel";


console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2);  //cannot get to do this beacuse it throws the error--

for(key in myObj){
    console.log(key, myObj[key]);
}   

console.log(JSON.stringify(myObj));