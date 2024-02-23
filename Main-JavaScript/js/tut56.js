console.log("Hey Welcome to tut55.js in tut we can learn --For.. of Loop vs For.. in Loop (When to use which?)--");

let person = ['Amit','Rohan','Divya','Teena'];

// --using traditional for loop--
for (let index = 0; index < person.length; index++) {
    const element = person[index];
    // console.log(element);
}

// 1. Iterating Object
let obj = {
    name: 'Amit Vishwkarma',
    perofession: 'Inforamtion and Techonoloy',
    work: 'Excellent'
}
console.log(obj);


// --using traditional for loop--
//--iterating an object using Traditional for loop
for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    // console.log(element);
}





// 1.1 iterating an object using for in loop-- --(latest use)--
for (let key in obj){
    console.log(obj[key]);
    // console.log(obj.name);
}



for(let name in person){
    // console.log(person[name]);
}


// 1.1 iterating an object using for in loop-- --(latest use)--
myStr = "Hey welcome to Home Amit";
for(let key in myStr){
    // console.log(myStr[key]);
}



// using For of Loop--
console.log("*****************For of loop*****************");
person = ['Amit','Rohan','Divya','Teena'];

for(let name of person){
    // console.log(name);
}

let str = "Hello welcome to the techincal world";

for(let name of str){
    // console.log(name);
}