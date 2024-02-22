console.log("Hey Welcome to tut47.js in this tut we can learn --Regular Expressions - character sets in JavaScript--");


//We can learn Previous :--
//Regular Expression
//MetaCharaters Symbol


//Character we can use this -[]
let regex = /Amit/;
regex = /A[a-z]/;
regex = /A[bcz]/;
regex = /A[^bcz]/; //<---In this char set ^ this mean is not b,c,& z--
regex = /A[^bcz]it[0-9]/;
regex = /A[^bcz]it[cky]/;
regex = /A[^bcz]it[cky][123]/;
regex = /A[a-zA-Z]it[cky012]/;

//Quantifier we can use this -{}
regex = /Am{2}it/;
regex = /Am{0,2}it/;

//Grouping we can use paranthesis -()
regex = /(Am){2}([0-9]t){3}/;


let str = "Hey Amit";
str = "Hey AmAm1t2t3t";

let result = regex.exec(str);
console.log("This result from exex is:",result);

if(result){
    console.log(`This string ${str} matches the expression ${regex.source}`);
}else{
    console.log(`This string ${str} does not match the expression ${regex.source}`);
}