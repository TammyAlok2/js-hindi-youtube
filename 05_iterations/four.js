const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
// object me (for -in)  yes ; (for-of) no  
// map me    (for -in)  no  ; (for-of )no 
// array me (for in ) yes   ; (for-of )yes 
for(const val in myObject){
    console.log(val , myObject[val])
}
const map = new Map()
map.set('mi','mumbai')
map.set('csk','chennai')
// not works 
for(const val in map){
    console.log(val)
}

const programming = ['c','c++'];
for(const val in programming){
    console.log(programming[val])
}