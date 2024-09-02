//var c = 300
let a = 300 
if (true){
    let  a= 10
    const b = 20 
    console.log("INNER:",a)
}
console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username ="Najir"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()
if (true){ 
    const username = "Najir"
    if (username==="Najir"){
        const website = " Youtube"
        console.log((username+website)); 
    }
    //console.log(website)
}
//console.log(username);



//++++++++++ Interesting ++++++
console.log(addone(5))
function addone(num){
    return num+1
}
addTwo(5) //not run
 const addTwo = function(num){
    return num+2
 }
