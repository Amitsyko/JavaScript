console.log("Hey Welcome to tut12.js we can learn in this tut --Understanding DOM & Creating a Website Layout--");

let a = document;
a = document.all;
// a = document.body;
// a = document.forms[0];
// a = document.links;
// a = document.links[0];
// a = document.forms[a];

// Array.from(a).forEach(function(element){
//     console.log(element);
// });
// console.log(a);

let c = document.images;
let d = document.scripts;

Array.from(c).forEach(function(element){
    console.log(element);
});
Array.from(d).forEach(function(element){
    console.log(element);
});
