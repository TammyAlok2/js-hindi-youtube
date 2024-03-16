console.log('this is working ')
// singleton 
// it is constructor method to make the object 
const obj1 = Object.create({hello:'this'});
console.log(obj1);
// object literals

const mySym = Symbol("key1")
const mySym1 = Symbol("key2")
 const JsUser = {
    name:"alok tamrakar ",
   mySym :'key1',
   [mySym1] :"mykey1",
    age :18,
    location:"Jaipur",
    email:'aloktamrakar2@gmail.com',
    lastLogin:['monday','tuesdaay']
 }
//console.log(JsUser."mylove")
 //console.log(JsUser[email])// error
 console.log(JsUser['email'])
 console.log(JsUser[mySym1])
 console.log(typeof
    (JsUser.mySym)) // string 
    console.log(typeof(JsUser.mySym1)) // undefined 
    console.log(typeof(JsUser[mySym1]))//string correct syntax 

    
   // Object.freeze(JsUser);// cannot change the object 
    JsUser.email ='aloktamraar'
    console.log(JsUser)

    // function in object 
    JsUser.greeting = function(){
        console.log('hello good morning')
    }
    JsUser.greeting2 = function (){
        console.log(`Hello js user ${this.name}`)
        // `${}` string interpolation 
    }
    console.log(JsUser.greeting2())
    console.log(JsUser.greeting);// undefined 
    console.log(JsUser.greeting())