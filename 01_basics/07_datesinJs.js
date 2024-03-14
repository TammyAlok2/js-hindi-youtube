console.log(Date) //function

let myDate =new Date();
console.log(myDate.getDate()) // gives only date
console.log(myDate.toString()) // gives whole output in string
console.log(myDate.toLocaleDateString()) // 03/14/2024
console.log(myDate.toDateString()) //Thu Mar 14 2024
console.log(typeof myDate) //object

let myCreatedDate = new Date (2023,0,23,7,9);
console.log(myCreatedDate.toDateString())// IN js month started from 0 

let myTimeStamps = Date.now()
console.log(myTimeStamps)

let newDate = Date.now()
let non= newDate.toLocaleString('default',{
    weekDay:"long",
    
})
console.log(non)