console.log("Hey Welcome to tut44.js in this tut we can learn --Error Handling & Try Catch");

let a = "AmitSyko";
a = undefined
if(a != undefined){
    throw new Error("This is not Undefined");
}else{
    console.log("This is undefined");
}

try {
    //    sdlkfjsldjfs
    //    console.log("We are trying to reach");
    functionAmit();
} catch (error) {
    console.log(error.name)
    console.log("Are you ok");
}