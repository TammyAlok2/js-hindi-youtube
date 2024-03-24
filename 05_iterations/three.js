// for of 
//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]
for (const val of arr) {
    console.log(val)
}
const arr1= ['rewa','satna','mangwan']
for(const val of arr1){
    console.log(val)
}

// map 
const map = new Map();
map.set('rcb','virat')
map.set('mi','mumbai indians')
map.set('rcb','virat')
//console.log(map)
for(const [key,value] of map){
    console.log(key, 'is team of ',value)
}
/* for (const key in map){
    console.log(key)
}  not possible in map */

const myobject = {
    game1:'pubg',
    game2:'freefire'
}
for(const key  in myobject){
    console.log(key)
}


