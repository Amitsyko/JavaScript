console.log("Hey Welcome to tut34.js in this tut we can learn Asynchronous Programming in JavaScript");

/*
---------------------------------------Important-------------------------------------------

There are three type of Asynchronous Syntax or functions

Async/Await
setTimeOut
callBacks
Promises

*/



setTimeout(() => {
    for(i=0;i<=5000;i++){
        console.log("WELCOME", "--"+ i);
    }
}, 100);

console.log("We are Done...!!!")