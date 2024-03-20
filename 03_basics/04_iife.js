// Immediately Invoked function Expressions (IIFE)
// ()() this is IIFE to immediate execute the functio 
// global scope ke pollution ko hatane ke liye IIFE use karte hai 
// semicolon is very important in IIFE __________________very important 
(function chai (){
    // named IIFE 
    console.log("Db connected successfully ");
})();

(()=>{
    console.log('Db connected 2 sucess');
}) ();


((name)=>{
console.log(`Heloo ${name}`);
})("alok");

(function hello (){
    console.log("hello this is me 1 ")
})();
(()=>{
    console.log("hello i am alok tamrakr ")
})();
((name)=>{
    console.log(`Hello everyone I am ${name}`)
})("rimjhim");