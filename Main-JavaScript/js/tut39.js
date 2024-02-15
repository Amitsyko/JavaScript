console.log("Hey Welcome to tut39.js in this tut we can learn Promises Basics, Promises,then(), Promise.Catch()");

//Promise
//Reject
//Pending

function func1() {
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("your Promise have been resolved")
                resolve();
            }else{
                console.log("your have been not resolved")
                reject("Sorry not fullfilled");
            }
        }, 2000);
    }) 
}

func1().then(function(){
    console.log("Amit: your promise was done");
}).catch(function(){
    console.log("Amit: your promise was not done");
})