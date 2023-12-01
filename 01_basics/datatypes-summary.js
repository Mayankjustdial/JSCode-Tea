// Prmitive
// 7 types : String ,Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id===anotherId);

const bigNumber = 34347565778867676896n


// Reference Type(Non Primitive)

// Array, Object, Function

const heros = ["shaktiman","naagraj","doga"];

let myObj = {
    name:"hitesh",
    age:22,

}

const myFunction = function(){
 console.log("Hello world");
}

// console.log(typeof myFunction);





// *********************************************
// Stack (Prmitive), Heap (Non-primtive)
let myYoutubeName = "techbeetalks"
let anothername = myYoutubeName
anothername = "mayankyoutube"
console.log(anothername);
console.log(myYoutubeName);


let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "mynk@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
