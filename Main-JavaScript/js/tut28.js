console.log("Hey Welcome to tut28.js in this tut we can learn Object ProtoType in JavaScript");

let obj = {
    name : "Amit",
    channel : "AmitSyko",
    address : "Moon"
}

// console.log(obj.toLocalString);

function mat(givenName){
    this.name = givenName
}

mat.prototype.getName = function () {
    return this.name;
}

mat.prototype.setName = function (newName) {
    this.name = newName;
}

let obj2 = new mat("Amit");
console.log(obj2);

