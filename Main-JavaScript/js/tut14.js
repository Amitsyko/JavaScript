console.log("Hey Welcome to tut14.js---We can learn in this tut14.js --HTML Element Selectors In JavaScript --");

/*----Element Selectors ----

1. Single Element Selector
2. Multiple Element Selector

*/


// ----Single Element Selector----

let element = document.getElementById("myfirst");
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = "red";
// element.innerText = "Doremon";


// element.innerText = "Doremon";
// console.log(element);

// let photo = document.getElementsByTagName("img");
// photo.innerHTML=<img src='https://debtdistressrescue.com.au/wp-content/uploads/2023/12/Group-1957.png'/>
// console.log(photo);





// let sel = document.querySelector("#myfirst");


let sel = document.querySelector(".child");
sel.style.color="red";
sel.innerText= "Doremon";
//   console.log(sel)




// ------Multi Element Selectors------

let elems = document.getElementsByClassName("child");
// elems.innerText = "Amit";
// elems = document.getElementsByClassName("container");
// elems = document.getElementsByTagName("div");
// console.log(elems);

// Array.from(elems).forEach(element => {
//     element.innerText = "red";
//    console.log(element);
// });



for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    element.style.color = "#ff25d7";
    console.log(element)
}

