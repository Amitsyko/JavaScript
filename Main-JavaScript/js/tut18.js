console.log("Hey Welcome to tut18.js----In this tut18.js we can learn in this tut More on JavaScript Event");

// let btn = document.getElementById("btn");
// // btn.addEventListener('click',fun1);
// // btn.addEventListener('dblclick',fun2);
// btn.addEventListener('mousedown',fun3);

// function fun1(e) {
//     console.log("Thanks to Click", e);
//     e.preventDefault();
// }    

// function fun2(e) {   
//     console.log("Thanks to Click Second Time", e);
//     e.preventDefault();
// }
    
// function fun3(e) {
//     console.log("Thanks its a Mouse Down", e);
//     e.preventDefault();
// }

// document.querySelector(".no").addEventListener('mouseenter', function () {
//     console.log("you entered mouse");
// })


// document.querySelector(".no").addEventListener('mouseleave', function () {
//     console.log("you leave your mouse");
// })

// document.querySelector(".no").addEventListener('mouseleave', function () {
//     console.log("you leave your mouse");
// })

document.querySelector('.container').addEventListener('mousemove',function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},154`;
    console.log("you triggered mouse move event");
})