// Most languages use same floating point system
console.log(99.9)

console.log(0.1 + 0.2 === 0.3) // FALSY VALUE
// JS numbers round up at the end in JS
// - When dealing with integers(whole numbers) & floating points
// - DIVIDE BY 100

console.log(0.1 * 0.2); // 0.300000000004 ROUNDING ERROR

// EX 1
const price = 9.33;
const quantity = 3;
console.log(price * quantity); // 27.9900000000002 ROUNDING ERROR

// EX 2
const anotherPrice = 9.33;
const anotherQuantity = 3;

console.log((anotherPrice * anotherQuantity) / 100) // 27.99
