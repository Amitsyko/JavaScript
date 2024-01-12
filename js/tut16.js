console.log("Hey Welcome to tut16.js----In this tut16 we can learn Creating Removing and Replacing the element");

let element = document.createElement("li");
//This is also the method to add text in the elements
// let text = document.createTextNode("Hey where are you gone");
// element.appendChild(text);
console.log(element);

// ----Add a class Name id and Attribute in to the li element----

element.id="none";
element.className="no";
element.setAttribute("title","myTitle");


//This is method to add text in element
element.innerText="Hey welcome Amit";
element.innerHTML="<strong>Hey welcome Amit</strong>";


let ul = document.querySelector("ul.this");
ul.appendChild(element);
console.log(ul);
console.log(element);

// -------------------------------------------

// ----Replace element----

let elem2 = document.createElement("h3");
elem2.id="unique";
elem2.className="unique1";
let Tnode = document.createTextNode("This is child Text node");
elem2.appendChild(Tnode);
console.log(elem2);
element.replaceWith(elem2);


// ----Change with class (child)----
let myul = document.getElementById("myul");
myul.replaceChild(element,document.getElementById("fui"));

// ----Remove elements----

myul.removeChild(document.getElementById("lui"));


let second = document.getElementById("second");
second.removeChild(document.getElementById("sec"));