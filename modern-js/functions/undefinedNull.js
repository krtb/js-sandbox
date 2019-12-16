//1) undefined for variable
let name

if (name === undefined) {
    console.log("provide a name");
} else {
    console.log(name);
}

// 2) Undefined for function arguments that aren't provided

let square = function (num) {
    console.log(num); //undefined
    // haven't used return in function
}

// undefined but not return in function
// try to do something with return value but
// nothing is being returned
let result = square()
console.log(result); // undefined

