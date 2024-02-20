console.log("Hey Welcome to tut41.js in this tut we can learn --Arrow Function-- in JavaScript");

/*---------------------- old ES-5 version function-- --------------------*/

/*
function Amit(name,city) {
    console.log("Hey welcome " + name +" "+ city);
}

Amit("Amit","Dewas");
*/



/*---------------------- Arrow Function --ES-6 version-- --------------------*/
/*
const Amit = ()=>{
    return 'Hey welcome Amit';
}
console.log(Amit());
*/


// ------then we can more compact the code ---one line code can be written like these :--
/*
const Amit = () => "Hey i am Amit Good Morning";

console.log(Amit());
*/

// const sweet = () => ({name : "Amit"});


// -----With Parameters-----
// const sweet = (name) => "Hey Good Morning " + name;

// -----With Parameters - But remove the barkets----
// const sweet = name => "Hey Good Morning " + name;


// -----With Multiples Parameters - Important in barkets----
const sweet = (name,city) => "Hey Good Morning " + name +" " + city;

console.log(sweet('Amit Vishwakarma','Indore'));


// ------then we can more compact the code ---one line code can be written like these :--
/*
const Amit = () => "Hey i am Amit Good Morning";

console.log(Amit());
*/