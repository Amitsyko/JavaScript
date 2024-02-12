console.log("Hey Welcome to the ajax35.js in this tut we can leran --Ajax In one video--");

/* 

//--Using GET Request--

let fetchBtn = document.querySelector('#fetchBtn');

fetchBtn.addEventListener('click', ButtonClickHandler)

function ButtonClickHandler(){

    //Initialize an xhr object --
    const xhr = new XMLHttpRequest();

    //Open the Object --
    xhr.open("GET",'https://jsonplaceholder.typicode.com/todos/1', true);

    //What to do on progress (optional)
    xhr.onprogress = function(){
        console.log("Progess Done");
    }

    xhr.onreadystatechange = function(){
        console.log('Ready state is' + xhr.readyState);
    }

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText)
        }else{
            console.log('Some error occured');
        }
    }

    // send the request--
    xhr.send();

    console.log("hello")
}

*/

/*
// --Using POST Request--

let fetchBtn = document.querySelector('#fetchBtn');

fetchBtn.addEventListener('click', ButtonClickHandler)

function ButtonClickHandler(){

    //Initialize an xhr object --
    const xhr = new XMLHttpRequest();

    //Open the Object --
    xhr.open("POST",'https://dummy.restapiexample.com/api/v1/create', true);
    xhr.getAllResponseHeaders('Content-type','applicatin/json');

    //What to do on progress (optional)
    xhr.onprogress = function(){
        console.log("Progess Done");
    }

    // xhr.onreadystatechange = function(){
    //     console.log('Ready state is' + xhr.readyState);
    // }

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText)
        }else{
            console.error('Some error occured');
        }
    }

    // send the request--
    params = `{"name":"AMikjksjfsf","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("hello")
}
*/

let popBtn = document.getElementById('popBtn');

popBtn.addEventListener('click', popBtnHandler);

function popBtnHandler(){
     //Initialize an xhr object --
     const xhr = new XMLHttpRequest();

     //Open the Object --
     xhr.open("GET",'https://jsonplaceholder.typicode.com/posts', true);
    //  xhr.getAllResponseHeaders('Content-type','applicatin/json');
 
     xhr.onload = function(){
         if(this.status === 200){            

             let obj = JSON.parse(this.responseText)
             console.log(obj);
             let list = document.getElementById('list');
             let str = "";

             for (let i = 0; i < obj.length; i++) {
                if (i < 5) {
                    str += `<li>${obj[i].body}</li>`;
                } else {
                    // Break the loop after processing the first 5 items
                    break;
                }
            }
             list.innerHTML = str;
         }else{
             console.error('Some error occured');
         }
     }
 
     // send the request--
     xhr.send();
 
     console.log("hello")
}