// function addNum(a,...args){
//     return a+args;
// }
// let add=addNum(4,4,2,5)
// console.log(add);

// function nums(...num1){
//     console.log(num1);
    
// }
// nums(2,24,6,5)

// function add(...nums){
//     let sum=0;
//     for(let i=0; i<nums.length; i++){
//         sum+=nums[i];
//     }
//     return sum;
// }
// console.log(add(4,2,5,1,5));


// let nums=[1,2,3,4,5];

// function rest(a,b,c,...num){
//     console.log(a,b,c)
//     console.log(num)
// }
// rest(2,...nums,4,3,53,3)

function add(...num){
    return num.reduce((acc,value)=>{
        return acc+value;
    },0)
}
let result=add(4,3,5,6,4,3);
console.log(result);
