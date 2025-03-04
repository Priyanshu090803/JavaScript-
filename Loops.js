// let arr=["green tea","oolong tea","chai","black tea"]
// let newArr=[]
// for(let i=0; i<=arr.length; i++){
//     newArr.push(arr[i])
//     if(arr[i]=="chai"){
//         break;
//     }
// }
// console.log(newArr)

// let arr=["london","new york","paris","berlin"];
// let visitedCity=[];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]==="paris"){
//         continue;
//     }
//     visitedCity.push(arr[i]);
    
// }
// console.log(visitedCity);

// let arr=[1,2,3,4,5];
// let smallNum=[];
// for (const elem of arr) {
//     if(elem===4){
//         break;
//     }
//     smallNum.push(elem)
// }   
// console.log(smallNum);

// let arr=["green tea","oolong tea","chai","black tea"]
// let prefferedType=[];
// for (elem of arr){
//     if(elem=="chai"){
//         continue;
//     }
//     prefferedType.push(elem);
// }
// console.log(prefferedType);


let cityPopulation={   
    "london":890000,
    "New york":840000,
    "Paris":2200000,
    "Berlin":3500000
}
let city={}
for(const index in cityPopulation){
    if(index==="Berlin"){
        break;
    }
    city[index]=cityPopulation[index]
}
console.log(city);
