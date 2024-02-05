console.log("Hey Welcome to tut30.js in this tut we can learn --Prototype inheritance in JavaScript--");

const proto = {
    sologan: function () {
        return `JavaScript is the best for me`;
    },
    changeName : function (newName) {
        this.name = newName;
    },
    changeAdd : function (newAdd) {
        this.add = newAdd;
    }
}

/*

//This create amit objects:--

const amit = Object.create(proto);
amit.name = "Amit";
amit.role = "Programmer";
amit.field = "Coder";
amit.add =  "Dewas";
amit.changeName("Amit Vishwakarma");
amit.changeAdd("New York");

*/


// Also this create amit objects:--

const amit1 = Object.create(proto, {
    name : {value : "Amit", writable: true},
    role : {value : "Programmer"},
});

amit1.changeName("Amit Vishwakarma");

// console.log(amit1);

//Employee constructor --
function Employee(name,salary,experince) {
    this.name = name;
    this.salary = salary;
    this.experince = experince;
}

//Slogan --
Employee.prototype.sologan = function () {
    return  `${this.name} is the good candidtaes all over the company`;
}

const amitObj = new Employee("AmitSyko",120000,"5years");
console.log(amitObj);

// Programmer --

function Programmer(name,salary,experince,language) {
    Employee.call(this,name,salary,experince);
    this.language = language;
};


//Inherit the Prototype--
Programmer.prototype = Object.create(Employee.prototype);

let rohan = new Programmer("Rohan","5000","2years","JavaScript");
console.log(rohan)