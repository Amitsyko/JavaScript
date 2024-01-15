console.log("Hey Welcome to tut20.js----In this tut we can learn -- Local and Session Storage--");


/*---------LocalStorage----------*/

let impArray = ["Ginger","Oninon","LadyFinger"];

//Add a key-value pair inside localStorage :-
localStorage.setItem("Name","Amit");
localStorage.setItem("Name1","Amisha");
localStorage.setItem("Vegitables",JSON.stringify(impArray));


//Clears the Entier Local Storage :-
// localStorage.clear();

//Clear a paritcular key-value pair:-
localStorage.removeItem("Name1");

//Retrive an item from localStorage :-
let name = localStorage.getItem("Name1");
name = JSON.parse(localStorage.getItem("Vegitables"));
console.log(name);


/*----------Session---------*/

sessionStorage.setItem("Name","sAmit");
sessionStorage.setItem("Profession","Information & Technology");