console.log("Hey Welcome to tut53.js in this tut we can learn --Generators in Javascript--");


//Generators --
// function * this is the generators syntax--

function * numbersGen(){

    //suppose we can print infinte number so we can use this i++ for generators 
    let i = 0;

    while(true){
        yield i++;
    } 

    // we can also use this--
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
}

const gen = numbersGen();
console.log(gen.next());
console.log(gen.next());
