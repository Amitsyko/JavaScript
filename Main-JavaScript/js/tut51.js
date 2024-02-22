console.log("Hey Welcome to tut51.js in this tut we can learn --Iterators in JavaScript--");

function fruitsIterators(values) {
    let nextIndex = 0;
    //we will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                 //we will return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            } else {
                //We will return below object with only done
                return { done: true }
            }
        }
    }
}

const myArray = ["Apple", "Banana", "Mango", "Orange"];
console.log("My Array is ", myArray);

//Using the iterators --
const fruits = fruitsIterators(myArray);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());