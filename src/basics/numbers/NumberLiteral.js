// NUMBER LITERAL / FUNCTION / CONSTRUCTOR SYNTAX

// FAVORITE (NUMBER LITERAL syntax)
const literalNumber = 99;
console.log(literalNumber) // BLUE: NUMBER / BLACK: string, or other


// FUNCTION SYNTAX
console.log(Number(99))
//=> trying to create a new number in a non-constructed context
// = providing type conversion & using Number() func and NOT 'NEW' keyword

console.log(Number('44px')) // NAN = not a number

// CONSTRUCTOR SYNTAX = creates a wrapper object/ AVOID USING
// => functions are FIRST-CLASS CITIZENS = can invoke with NEW keyword
console.log(new Number(66)); // creates new instance of number as object
// USE CASE: 
