const coding = ["js", "rb", "py", "jave", "cpp"]
// coding.forEach(function(val) {
//     return console.log(val);
// })
// coding.forEach(function(val){
// console.log(val);
// })

coding.forEach((item) =>{
    //console.log(item);
    
})
function printMe(item){
   // console.log(item);
}
//coding.forEach(printMe)

coding.forEach((item,index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [{
    languageName:"java",
    languagefileName:"js"
},
{
    languageName:"javaScript",
    languagefileName:"js"
},
{
    languageName:"ruby",
    languagefileName:"rb"
}
]
myCoding.forEach((item) =>{
    // console.log(item.languageName);
    console.log(item.languagefileName);
    
})