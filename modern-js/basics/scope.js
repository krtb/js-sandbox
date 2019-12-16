// LEXICAL SCOPE (static scope) 
// Global Scope - defined outside of code block 
// Local Scope - defined inside of code block

// in scope, can access vars defined inside,
// or any parent scope  


// global scope = varOne
    // local scope = varTwo
        // local scope = varFour
    // local scope = varThree 

let varOne = "varOne"

if (true) {
    console.log(varOne);
    let varTwo = "varTwo"
    console.log(varTwo);  

    if (true) {
        let varFour = "varFour"
    }
}

if (true) {
    let varThree = "varThree"
}

console.log(varTwo);
 