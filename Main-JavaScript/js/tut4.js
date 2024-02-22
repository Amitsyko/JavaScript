console.log('Hey Welcome to tut4.js in this tut we can learn --Data Types in JavaScript (Primitive & Reference Types)--');
/*
    Data types :-

    There are two type of data types :-
    
    # Primitive DataTypes :-

    # Reference DataTypes :-

    ------Primitive DataTypes-------
  
    * string
    * numbers
    * Boolean
    * Null 
    * Undefined

    -------Reference DataTypes------

    * Arrays
    * Objects Literals
    * Functions 
    * Dates
*/


// ------Primitive DataTypes-----

// String :-

const MyName = 'Amit Vishwakarma';

console.log('Hello my name is ' + MyName);
console.log('Data type is ' + (typeof MyName));



// Numbers :-

const Digit = 305;

console.log('Data type is ' + (typeof Digit));


// Boolean :-

const Bool = true;

console.log('Data type is ' + (typeof Bool));

// Null :-

const nullVar = null;

console.log('Data type is ' + (typeof nullVar));

// Undefined :-

const Undefi = undefined;

console.log('Data type is ' + (typeof Undefi));


//Reference DataTypes :-

let arr1 =  [3,6,9,12];
console.log(arr1);
console.log('DataType is '+ (typeof arr1));

let arr2 = {
    Amit: 90,
    Amisha: 30,
    Seema: 41,
    Rohan: 50
};

console.log( 'Data Type is',(typeof arr2));

function name() {
    
}
console.log('Data Type is '+ (typeof name));

let date = new Date();
console.log('Data Type is '+ (typeof date));

