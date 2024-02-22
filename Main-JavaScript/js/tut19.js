console.log("Hey Welcome to tut19.js---- We can learn in this tut19.js--Smart Page Crawler--");

let str = "python";
let links = document.links;
console.log(links);
let href;

Array.from(links).forEach(function(element){
    href = element.href;
    if(href.includes(str)){
    console.log(href);
}
});