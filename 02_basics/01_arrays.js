const myArray = [1,2,3,4,5];
console.log(myArray)

const array = new Array(1,2,3,4,5);
console.log(array)

// array makes shallow copy means it takes reference and not make any copy it uses heap 
const myHeros = ["rimjhim","alok"]
console.log(myHeros)

// array methods 
myArray.push(12,12);
console.log(myArray)
myArray.pop()
myArray.unshift(10) // to push on front of 
myArray.shift() // removes the fast element of the array 

console.log(myArray.includes(10)); // returns true if array contain value otherwise false if array doesn't contain value 

console.log(myArray.indexOf(3)); // return the index of value if present other wise -1

const newArr = myArray.join(); // converted array into string 

console.log(newArr)
console.log(myArray)

// differnce btw slice and splice
const rimArray = [10,20,30,40,50]

const sliceArray = rimArray.slice(1,3);
console.log("slice",sliceArray)
console.log( "original array ",rimArray)
const spliceArray = rimArray.splice(1,3);
console.log("splice",spliceArray)
console.log("original array",rimArray)
// In slice it does not include the last element and the origanal remain same 
// In splice it include the last elment and original array changed and original array only contain element left after splice