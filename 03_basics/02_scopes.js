
let a =100 //global scope
if(true){
    let a =10
    //block scope
    console.log("inner a :",a)
const b =20
var c= 30
}
console.log(a)
//console.log(b)
console.log(c)

// nested scope 

function one (){
    const username = 'hitesh '

    function two(){
        const website = 'youtube'
        console.log(username)
    }
   // console.log(website) gives error 
    two()
}
one()
// child can use the parent element 
if(true){
    const username = "hitesh"
    if(username ==='hitesh'){
        const website = 'youtueb'
        console.log(username+website) // working 
    }
   // console.log(website) // error 
}
//console.log(username)//error 



//+++++++++++++++++++Interseting + ++++++++++

// concept of hoisting 
addOne(5); // it is possible 
function addOne (num){
    return num+1;

}

// addTwo(5) // error not possible because it is variable 
// variable can cotain function also it is called as experession 
const addTwo = function num(){
    return num+2;
}

addTwo(2)