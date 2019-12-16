// Global scope (celsiusConverter, temp1, temp2)
    // Local scope (fahrenheit, celsius)
        // Local scope (isFreezing)

function celsiusConverter(fahrenheit) {
    // functions define a new local scope
    let celsius = (fahrenheit - 32) * 5 / 9

    if (celsius <= 0) {
        // can access everything from in here, 
        // or parents in outer scope
        let isFreezing = true
    }

    return celsius
}

let temp1 = celsiusConverter(32)
let temp2 = celsiusConverter(68)

console.log(temp1);
console.log(temp2);
