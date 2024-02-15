console.log("Hey Welcome to tut37.js in this tut we can learn --CallBack Function in JavaScript--");

//Pretend that this response is coming form the server :---
const students = [
    { name: "Amit", Subject: "JavaScript" },
    { name: "Rohan", Subject: "HTML" }
]


function enrollStudents(student, callback) {
    setTimeout(function() {
        students.push(student);
        console.log("Student has been Enrolled");
        callback();
    }, 2000);
}

function getStudents() {
    setTimeout(function() {
        let str = "";
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`;
        });
        document.getElementById("students").innerHTML = str;
        console.log("Student have been Fetch");
    }, 1000);
   
}

let newStudents = {name: "Sunny", Subject: "Python"}
enrollStudents(newStudents, getStudents);
// getStudents();