console.log("Hey Welcome to tut27.js in this tut we can learn --Object literals, Constructors, Object Orinted--")


//----Object Literals for creating Objects-----

let car = {
    Name : "Maruti Suzuki",
    TopSpeed : 80,
    run : function () {
        console.log('Maruti Suzuki is runnig');
    }
    }
// console.log(car);




//----We are already seen the constructors----
//----     new Date();




//----Creating a Constructors for car-----

function genCars(givenName,givenSpeed){
    this.name = givenName;
    this.speed = givenSpeed;

    this.run = function () {
        console.log(`${this.name} is runnig`);
    }
    this.analyise = function () {
        console.log(`This car is slower than 
        ${200 - this.speed} km/H than Mercedes`);
    }
}

car1 = new genCars("Bukati","120");
car2 = new genCars("Maruti Alto","80");
car3 = new genCars("Mercedes","200");
console.log(car2);