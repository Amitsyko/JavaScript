console.log("Hey Welcome to tut39b.js in this tut we can learn Promises Basics, Promises,then(), Promise.Catch()");

//Promise
//Reject
//Pending

//Pretend that this response is coming form the server :---
const students = [
    { name: "Amit", Subject: "JavaScript" },
    { name: "Rohan", Subject: "HTML" }
]


function enrollStudents(student) {
    return new Promise(function (resolve, reject){
        setTimeout(function () {
            students.push(student);
            console.log("Student has been Enrolled");
            const error = false;
            if(!error){
                resolve();
            }else{
                reject();
            }
            
        }, 2000);
    })
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`;
        });
        document.getElementById("students").innerHTML = str;
        console.log("Student have been Fetch");
    }, 1000);

}

let newStudents = { name: "Sunny", Subject: "Python" }
enrollStudents(newStudents).then(function () {
    getStudents();
    console.log("you resolved has been Done....!!!")
}).catch(function () {
    console.log("you resolved has Not been Done....!!!")
})
// getStudents();