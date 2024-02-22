console.log("Hey Welcome to tut46.js in this tut we can learn --JavaScript Regular Expxression");


//Regular expression is use to search the strings and other objects in the elements--

let reg = /Amit/;  // <--Regular Expression literal Syntax
reg = /Amit/g;  // <--g is use for global (flag)
// reg = /Amit/i;  // <--i is use case insensitive(flag)
/*
console.log(reg);
console.log(reg.source);  //source can be used to (inner HTML)
*/


//Create a string and we can serch with regualr expression 
let s = "This is Amit, and Amit is a good boy";

//1- exec() -- This function will be return an array for match or null for no match;
let result = reg.exec(s);
/*
if (result) {
    console.log(result);
    console.log(result.input);
    console.log(result.index);
}
*/

//--Now we can search the multiple words so we can use flag--
// result = reg.exec(s);
// console.log(result);

// result = reg.exec(s);
// console.log(result);



//2- test() - Retrun true or false--
let result2 = reg.test(s);
//console.log(result2);  //<--This will only print true if the "reg" is there in the string "s";


//3-match() - it will be return arrray of result or null; and it also can be return as opposite;
//let result3 = reg.match(s); //<--This is wrong syntax--
let result3 = s.match(reg); //<--This is right syntax--
// console.log(result3);



//4- search() - Retrun index of first match else -1
//let result4 = reg.search(s); //<--This is wrong syntax--
let result4 = s.search(reg); //<--This is right syntax--
// console.log(result4);


//5-replace() - Returen New replace string with all the replacements

let result5 = s.replace(reg, "Rohan");
console.log(result5);