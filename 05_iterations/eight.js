const myNums = [1,2,3]
//const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval
// },0)

// const myTotal = myNums.reduce((acc,curr) => acc+curr,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        Price:2999
    },
    {
        itemName:"py course",
        Price:999
    },
    {
        itemName:"Mobile Dev course",
        Price:5999
    },
    {
        itemName:"data Science course",
        Price:12999
    }
]
const priceTopay = shoppingCart.reduce((acc,item) => acc+item.Price,0)
console.log(priceTopay);
