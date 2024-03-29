let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof(valueInNumber));

let score_1 = "33abc"
let valueInNumber_1 = Number(score_1)
console.log(typeof(valueInNumber_1));
console.log(valueInNumber_1);

let score_2 = null
let valueInNumber_2 = Number(score_2)
console.log(typeof(valueInNumber_2));
console.log(valueInNumber_2);

let score_3 = undefined
let valueInNumber_3 = Number(score_3)
console.log(typeof(valueInNumber_3));
console.log(valueInNumber_3);

// "33" => 33
// "33abc" => NaN Not a Number
// true => 1; false => 0

let isLoggedIn = "akshat"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "akshat" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));