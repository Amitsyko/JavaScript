console.log("Hey Welcome to tut47.js in this tut we can learn --Shorthand character classes (Regular Expressions) in JavaScript--");

//Character classes -- 
let regex = /\wmit/;            //Word character - _or aplhabates or numbers
regex = /\w+mit/;               //more than char -- mit
regex = /\Wvish/;               //No word charcter
regex = /\W+vish/;              //kuch bhi likho par character mat likho like %%@//@--++etc
regex = /number \d111/;         //d means digit
regex = /number \d+111/;        //d means digit (--111 ke phele kitni bhi digit ho chalegi)
regex = /\D111/;                //D means non digit  
regex = /\D+111/;               //D means non digit  
regex = /\smy number/;          //Match with whitespace 
regex = /\s+my number/;         //Match with whitespace  
regex = /\Smy number/;          //Match with whitespace  
regex = /\S+my number/;         //Match with whitespace  
regex = /1a2v\b/;               //word boundary  


//Assertions--
regex = /A(?=m)/;
regex = /A(?!m)/;

let str = "Amit1a2vd ++//**vish And my number 835111 111222333";

let result = regex.exec(str);
console.log("This result from exex is:", result);

if (result) {
    console.log(`This string ${str} matches the expression ${regex.source}`);
} else {
    console.log(`This string ${str} does not match the expression ${regex.source}`);
}