const accountId = 144553
let accountEmail = "mayank@gmail.com"
var accountPassword = "12345"
accountCity = "Barauni" //it is allowed but not a good practice
let accountState;


// accountId =2  //not allowed

accountEmail = 'my@gmail.com'
accountPassword ="2121121"
accountCity = "Begusarai"
console.log(accountId);

/* 
prefer to not use var
because of issue in block scope and functionL scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])