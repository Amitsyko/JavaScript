console.log("Hey Welcome to tut42.js in this tut we can learn --Fetch API-- in JavaScript");

let myBtn = document.querySelector("#myBtn");
myBtn.addEventListener("click",()=>{
    getData();
})

let content = document.querySelector("#content");

// function getData(){
//     console.log("Started getData")
//     url = "amit.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

// console.log("Before running getData");
// getData();
// console.log("After running getData");




/*-------------Get Request API----------------*/

function getData(){
    console.log("Started getData")
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.json();
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data);
    })
}


// console.log("Before running getData");
// getData();
// console.log("After running getData");



/*-------------POST Request API----------------*/

// function postData() {
//     url = "https://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"Yahoo","salary":"123","age":"23"}';
//     params = {
//         method: "post",
//         headers : {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     }
//     fetch(url, params).then(response => response.json()) 
//     .then(data =>  console.log(data))
// }

// postData()
