function saymyName(){
    //function definition
    console.log('H')
    console.log('I')
    console.log('T')
    console.log('E')
    console.log('S')
}
// function reference
//saymyName()
// we receive parameters and we pass arguments
function addTwoNumbers(num1,num2){
    console.log( num1+num2);
}
let ans = addTwoNumbers(2,3)
console.log(ans) //undefined
// default value in function
function isLoggedIn(username =
    'Guest'){
    if(!username){
        console.log('please enter username')
        return ;
    }
    return `${username} just logged in`
}
//console.log(isLoggedIn('Alok'))
console.log(isLoggedIn()) // undefined


// rest operator (taking multiple values)... learn difference btw spread and rest 
function calculateCartPrice(...num1){
return num1;
}
console.log(typeof(calculateCartPrice(100,300,400))) //object

function calculateCartPrice1(val1,val2,...num2){
    return num2;
}
console.log(calculateCartPrice1(100,200,300)) // ans = 300 

const user  ={
    username:"alok",
    price:200
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)
handleObject({
    username:"anmol",
    price:200
})

const myNewArray = [200,300,400]
function returnSecondValue(value){
    console.log(value[1]);
    return value[1];

}
returnSecondValue(myNewArray)