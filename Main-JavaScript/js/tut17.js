console.log("Hey Welcome tut17.js----In this tut17.js we can learn --Events & Event Object In JavaScript--");

document.getElementById("heading").addEventListener("mouseover", function(e){
    console.log("you have click the haeading");
    // location.href="//facebook.com";
    let variable;
    variable = e.target;
    variable = e.target.className;
    variable = Array.from(e.target.classList);
    // variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    // variable = e.style.backgroundColor = "red";
    console.log(variable);
});
