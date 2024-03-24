const coding = [ 'c', 'c++','java','javascript']
// for each loop 
coding.forEach((val)=>{
    console.log(val)
})

coding.forEach((item,index,array)=>{
    console.log(item,index,array)
})
const mycoding =[
    {
        languageName:"javascript",
        languageFile:'js'
    },
    {
        languageName:"java",
        languageFile:'java'
    },
    {
        languageName:"c++",
        languageFile:'cpp'
    }
]
mycoding.forEach((val)=>{
    console.log(val.languageName, 'is', val.languageFile)
})