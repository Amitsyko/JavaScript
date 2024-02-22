console.log('Hey Welcome to tut3.js in this tut we can learn --Variables: let, const & var in JavaScript--');

// Learn Variables in this tut3.js

// ----var,let,const----

// ---------------------------------------------
               // ------var-----
        //--var is use for global scope--
var name = "Amit";
name = "Vishwakarma";
var subject = "Information and Techonology";
var Profession;
var city = "Indore";
    
console.log(name, subject,Profession,city);

var num= 34;
console.log(num);

                // ------const-----
        //--const is use for single scope--

const ownerName = "Amit";
// ownerName ="Amisha"; wrong way to use (error)

// Ap const ko change nahi kar skte.
console.log(ownerName);


                //----Let---- Block scope 

{
    // Local use only :- like if esle conditions
    
    let city = "Jaipur";
    // city ="Dewas";
    console.log(city);
}

    // console.log(city);


   