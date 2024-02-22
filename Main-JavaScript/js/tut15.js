console.log("Hey Welcome to tut15.js-----We can learn in this tut --Children, Parent & Traversing the DOM--");

let cont = document.querySelector(".no");
cont = document.querySelector(".container");

let nodeName = cont.childNodes[5].nodeName;
let nodeType = cont.childNodes[10].nodeType;

// console.log(nodeName);
console.log(nodeType);

/*

NodeType list

1- Eleement
2- Attribute
3- Text Node
8- Comment
9- Document
10- Doctype

*/

// console.log(cont.childNodes);
// console.log(cont.children);

let container = document.querySelector('div.container');

// console.log(container.children[1].children[0].children);

// console.log(container.firstElementChild);
// console.log(container.lastElementChild);


// console.log(container.children);
// console.log(container.childElementCount);

console.log(container.parentNode);
console.log(container.nextElementSibling.nextElementSibling);
