console.log("Hey Welcome to tut58.js in this we can leran --JavaScript Sets--");

const mySet = new Set();
console.log(mySet);

mySet.add("this");
mySet.add("this");
mySet.add("Amit");
mySet.add("vegitables");
mySet.add("this vegitables");
mySet.add(34);

console.log("This is my set ",mySet);

//has() check the value is on set is present or not if value is present so it will retrun true or false--
console.log(mySet.has("this"));

//mySet value size--
console.log(mySet.size);


//use constructor to initilize the set--
let mySet2 = new Set([1,45,"Amit","Rohan","Kavita",true,false,{a:45,b:46},"this"]);
console.log(mySet2);

console.log("Befor removal", mySet.has("this"));
mySet.delete("this");
console.log("After removal", mySet.has("this"));

//Iterating a set--
for(let item of mySet){
    // console.log("Item is",item);
}

mySet.forEach((item)=>{
        console.log("Items here",item)
})