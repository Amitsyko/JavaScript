console.log("Hey Welcome to Project50.js in this Project we can learn --Form validation in JavaScript--");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

let validName = false;
let validEmail = false;
let validPhone = false;

$('#success').hide();
$('#failure').hide();

console.log(name, email, phone);

name.addEventListener("blur", () => {
    console.log("Name is blured");
    //validate name here
    let regex = /^[a-zA-Z]([\s+0-9a-zA-Z]){2,20}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Name is matched");
        name.classList.remove("is-invalid");
        validName = true;
    } else {
        console.log("Name is not matched");
        name.classList.add("is-invalid");
        validName = false;
    }
})

email.addEventListener("blur", () => {
    console.log("email is blured");
    //validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Email is matched");
        email.classList.remove("is-invalid");
        validEmail = true;

    } else {
        console.log("Email is not matched");
        email.classList.add("is-invalid");
        validEmail = false;
    }
})

phone.addEventListener("blur", () => {
    console.log("phone is blured");
    //validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Phone is matched");
        phone.classList.remove("is-invalid");
        validPhone = true;
    } else {
        console.log("Phone is not matched");
        phone.classList.add("is-invalid");
        validPhone = false;
        // phone.classList.add("bg-danger")
        // phone.classList.add("text-white")
    }
})


//When form is submitted

const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("You clicked to submit");
    console.log(validName, validEmail, validPhone);

    if (validName && validEmail && validPhone) {

        console.log("Form is submitted");
        let success = document.getElementById("success");
        success.classList.add("show");
        // failure.classList.remove("show");

        $('#failure').hide();
        $('#success').show();

    } else {
        console.log("Form is not submitted");
        let failure = document.getElementById("failure");
        failure.classList.add("show");
        $('#success').hide();
        $('#failure').show();
    }

})