
//const tinderUser = new Object ()
const tinderUser = {}
 tinderUser.id = "123";
 tinderUser.name= "rimjhim"
console.log(tinderUser)

const regularUser = {
    email:"aloktamrkar1@gmail.com",
    fullName:{
        name:'alok',
        middleName:'kumar',
        caste:'tamrakar'
    }
}
console.log(regularUser?.fullName)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = Object.assign({},obj1,obj2)
const obj4 = {...obj1, ...obj2};
console.log(obj4)
console.log(obj3)

const users = [
    {
    id:1,
    email:'alok',
    },
    {
        id:1,
        email:'alok',
    },
    {
        id:1,
        email:'alok',
    }
]

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('name'))