const num1=[1,2,3,4,5];
const num2=[6,7,8,9,10];
// const name="Priyanshu"

const jointNum=[...num1,...num2]
// console.log(jointNum);

// let arr=["hello","js","hello","python"]
// function spread(...args){
//     console.log(args);
    
// }
// spread(...arr)
// function sum(...num1){

// }
// let name="priyanshu"
// let spreadName=[...name];
// console.log(spreadName);

// console.log(...name)

function add(){
    let sum=0;
    for (let i=0 ; i<arguments.length; i++){
        sum+= arguments[i]
    }
    return sum;
}
console.log(add(...jointNum))