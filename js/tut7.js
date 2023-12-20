console.log("Welcome to the tut7 and we will discuss about the arrays");

let num = [24,35,45,90];
const fruits = ["Apple","Orange","Mango"];
const mixed = [55,"Amit",true,"Rohan",[3,65]];

const arr = new Array(2,4,6,8,"Orange");

// console.log(arr);
// console.log(num);
// console.log(fruits)
// console.log(mixed)
// console.log(num.indexOf(90));

arr[4] = "Amit";
// console.log(arr);

let arrelement = arr[4];
// console.log('element :', arrelement);

// ----Mutating (Modifying) chagne the array value----

// num.push(20);   //----push krne se value last me add hoti he


// num.unshift(300); //--Unshift krne se value starting me add hoti he

// num.pop(); //--pop krne se last ki value hat jati he

// num.shift(); //--shift krne se last ki value hat jati he

// num.splice(0,2); //--splice krne se hum value ko kahi se bhi hata skte he parameters ke sath

// num.reverse();

let num2 = [1,2,3];
num = num.concat(num2)
// console.log(num);

let myObj = {
    name : "Amit Vishwakrma",
    isActive : true,
    status : "Information and Techonologies",
    marks : [2,3,5]
}
console.log(myObj['marks']);

