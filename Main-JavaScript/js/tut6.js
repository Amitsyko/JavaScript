console.log("Welcome to tut6. we can learn in this tut --Strings: Properties, Methods & Template Literals in JavaScript --");
const name = "Amit";
const Greet = "Good Morning";

console.log(name+" "+Greet);

let html;
html = "<h1>This is heading</h1>" +
        '<p>This is paragraph</p>';

// console.log(html);
// console.log(html.length)
// console.log(html.toUpperCase());
// console.log(html.toLowerCase());

// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('>'));
// console.log(html.endsWith('ldfksg'));

//  console.log(html.includes('This'));
//  console.log(html.substring(0,2));
//  console.log(html.slice(-4));
//  console.log(html.split(" "));
// console.log(html.replace('This', 'is'));


let fruit1 = 'Orange';
let fruit2 = 'Mango';

let myHtml = `Hello ${name}
Your Favroute ${fruit1} And ${fruit2}`;
document.body.innerHTML = myHtml;