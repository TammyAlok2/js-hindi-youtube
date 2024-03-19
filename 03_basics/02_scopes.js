
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