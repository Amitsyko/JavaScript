console.log("Hey Welcome to tut31.js in this tut we can learn ES6 Classes and Inheritance in JavaScript");

class employee {

    constructor(givenName, givenSalary, givenExp) {
        this.name = givenName;
        this.salary = givenSalary;
        this.exp = givenExp;
    }

    slogan() {
        return `${this.name} is the good employee ever`;
    }

    joinYear() {
        return 2024 - this.exp;
    }

    static add(a, b) {
        return a + b;
    }

}


class Programmer extends employee{
    constructor(givenName,givenSalary,givenExp,givenLang,github){
        super(givenName,givenSalary,givenExp);
        this.lang = givenLang;
        this.github = github
    }
    favlanguage(){
        if(this.lang == "JavaScript"){
            return "JavaScript";
        }else{
            return "Python";
        }
    }
    static mul(a,b){
        return a*b;
    }
}
// Emp = new employee("Somendra", 1000, 20);
// console.log(Emp);
// console.log(Emp.joinYear());
// console.log(employee.add(3,10));

let rohan = new Programmer('Rohan Das',2000,0,"English");
console.log(rohan);
// console.log(Programmer.mul(1000,2));