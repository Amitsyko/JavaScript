console.log("Hey Welcome to tut47.js in this tut we can learn --Regular Expressions - MetaCharacters in JavaScript--");


let regex = /Amit/;

//Lets look into some metaCharaters Symbols--

// regex = /^A/;     //Not Working
regex = /it$/;    //--$ is use for the last matches of the string  
regex = /A.it/;   //match any one charcter
regex = /A*it/;      //matches any 0 or more character
regex = /Aa?miti?/;      //--(optional)-- matches any 0 or more character
regex = /A\*it/;      //matches any 0 or more character  --Not working


let str = "Hey Amit where you form Amit";

let result = regex.exec(str);
console.log("This result from exex is:",result);

if(result){
    console.log(`This string ${str} matches the expression ${regex.source}`);
}else{
    console.log(`This string ${str} does not match the expression ${regex.source}`);
}