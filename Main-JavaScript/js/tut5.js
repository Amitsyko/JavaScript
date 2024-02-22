console.log('Welcome to tut5.js we can learn in this tut --JavaScript Type Conversion & Coercion--');

// -----Type Conversion And Coercion----

//-----Type Conversion-----

let num = 34;
console.log(num, (typeof num));

let boolVar = String(true);
console.log(boolVar,(typeof boolVar));

let date = new Date();
console.log(date, (typeof date));

let arr1 =[1,2,3,4,5];
console.log(arr1, (typeof arr1));

let i = 360;
console.log(i.toString());

let str = Number('3456');
str = Number('345a6');
str = Number(true);
str = Number([1,2,3,4]);

console.log(str, (typeof str));

let number = parseFloat('34.098');
console.log(number.toFixed(2), (typeof number));


//-----Type Coercion-----


let mystr = Number('324');
let myNum = 24;

console.log(mystr + myNum);