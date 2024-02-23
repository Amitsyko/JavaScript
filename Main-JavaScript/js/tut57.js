console.log("Hey Welcome to tut57.js in tut we can learn --JavaScript Maps--");

//Map in JavaScript: In this Map we can use any type of key and values--
const myMap = new Map();
// console.log(myMap);

const key1 = "Amit", key2 = {}, key3 = function () { };


//Setting Map Values--
myMap.set(key1, "This is blank string");
myMap.set(key2, "This is blank object");
myMap.set(key3, "This is blank function");
// console.log(myMap);


//Getting the Map values--
let value = myMap.get(key1);
// console.log(value);


//Getting the Map sizes--
// console.log(myMap.size);


//we can also use the for of loop in map to get keys and values--
for (let [keys, values] of myMap) {
    // console.log(keys,values);
}

//Get only Keys--
for (let key of myMap.keys()) {
    // console.log("The Map key is ",key);
}

//Get only values--
for (let value of myMap.values()) {
    // console.log("The Map value is ",value);
}

console.log("***************************ForEach-Loop************************")
//You can loop thorugh a map using foreach loop--
myMap.forEach((key,value) => {
    console.log("Keys",key);
    console.log("Values",value);
});
console.log("***************************ForEach-Loop************************")


//Converting Map into an array--
let myArr = Array.from(myMap);
console.log(myArr);

//Converting Map.keys into an array--
let myKeyArr = Array.from(myMap.keys());
console.log(myKeyArr);

//Converting Map.values into an array--
let myValueArr = Array.from(myMap.values());
console.log(myValueArr);