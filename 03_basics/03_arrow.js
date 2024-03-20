const user = {
    username : "alok tamrakar ",
    price:"1000",
    welcomeMessage:function (){
        console.log(` Hello ${this.username},welcome to the website` )
       // console.log(this) gives full context
    }
}
//user.welcomeMessage()
//user.username= "alok "
//user.welcomeMessage()
//console.log(this) // empty because it is not in node enviroment
function chai(){
    let username = "alok"
  //  console.log(this.username) not possible 
}
chai()

const chai1 = function(){
let username = 'aok'
//console.log(this.username) // undefined 
}
chai1()

const chai2 = ()=>{
    let username = 'alok kumar'
    console.log(this)

}
chai2()

// arrow function  {} isme wrap karne me return likhna padega must hai nahi to nahi lena padega 
// explict return  
const addTwo = (num1,num2)=>{
    return num1 +num2;
}

// implict return 
const addThree  = (num1,num2)=> num1+num2;