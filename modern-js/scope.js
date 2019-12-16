// LEXICAL SCOPE (static scope) 
// Global Scope - defined outside of code block
// Local Scope - defined inside of code block

let varOne = "varOne"

if (true) {
    console.log(varOne);
    let varTwo = "varTwo"
    console.log(varTwo);  
}

console.log(varTwo);
 