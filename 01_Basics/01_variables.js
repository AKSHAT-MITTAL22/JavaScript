const accountId = 53386
let accountEmail = "test@gmail.com"
var accountPassword = "12345"
accountCity = "Gohana"

// accountId = 2 //Not allowed to change const variables
accountEmail = "debug@gmail.com"
accountPassword = "54321"
accountCity = "Delhi"
let accountState;
console.log(accountId);

/*
Prefer not to use var:
bacause of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])