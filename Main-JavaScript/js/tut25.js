console.log("Hey welcome to tut25.js in this tut we can learn --Creating an Editable Div Exercise 2: Solution--");

let divElm = document.createElement("div");

let val = localStorage.getItem('text');
let text;
if(val == null){
    text = document.createTextNode("This is editable div by the user");
}else{
    text = document.createTextNode(val);
}

divElm.setAttribute("id", "user");
divElm.setAttribute("class", "usec");
divElm.setAttribute("style", "border:2px solid black; padding:20px;display:inline-block");

// let text = document.createTextNode("This is editable div by the user");
divElm.appendChild(text);

let cont = document.querySelector(".container");
let first = document.getElementById("myfirst");

cont.insertBefore(divElm, first);
divElm.appendChild(text);

console.log(divElm, cont[0], first);

//----Add event listner-----

divElm.addEventListener("click", function () {
    let noTextArea = document.getElementsByClassName("textarea").length;

    if (noTextArea == 0) {

        let html = user.innerHTML;

        divElm.innerHTML = `<textarea class="textarea" placeholder="Leave a comment here" id="textarea"> ${html}</textarea>`;
    }
    // console.log(html);

    //-----Listen  for the blur event on textarea-----
    let textarea = document.getElementById("textarea");
    textarea.addEventListener('blur', function () {
        user.innerHTML = textarea.value;
        console.log(textarea);
        localStorage.setItem('text',user.innerHTML);
    });
});



