const marvel_heroes = ["thor","IronMan","spiderman"];
const Dc = ["superman","Batman","flash"];

//marvel_heroes.push(Dc)
console.log(marvel_heroes) // it takes array as data 
console.log(marvel_heroes.length) // answer is 4 
// concat gives new array 
 const newHero = marvel_heroes.concat(Dc);
console.log(newHero)
console.log(newHero.length)//7

const allHero = [...marvel_heroes,...Dc] // using spread operator
console.log(allHero)

const another_array = [1,2,3,[4,5,6],7,[6,2,[4,5]]];
console.log(another_array.length) //6
const real_another_array = another_array.flat(Infinity) // return all the other array in one 
console.log(real_another_array)

console.log(Array.isArray("Hitesh")) // return true if right otherwise false here it is false 
console.log(Array.from("ALok")); // makes array 

console.log(Array.from({name:"alook"})) // interesting and gives []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // makes array 
