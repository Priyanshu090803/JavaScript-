// const arr=[1,21,24,2,5,12]
// console.log(typeof(arr))


// const fruits=['apple','banana','grapes','papaya'] 
// fruits.forEach((value,i,arr)=>{
//     console.log( i, )
// })
            
// const num=[2,4,3,12,9,8];

// const mul=num.map((value,i,arr)=>{
//     return `${value}*2 = ${value*2}`
// })

// num.unshift(3,2321,422)
// num.shift()
// num.splice(0,1,1213)
// console.log(num);


// const hello=['a','b','c','d','e']

// console.log(hello.indexOf('c',2));

// hello.splice(4,2,'l')
// hello.push('l')
// const index=hello.indexOf('c')
// hello.splice(index,1)
// console.log(hello);


// const num=[1,32,43,354,3,535];
// let result=num.filter((value)=>{
//        return value>100;
// })
// console.log(result);

// const num=[3,3,61,4,3,66,9];
// const check=4;
// let result =num.filter((value)=>{
//     return value != check;
// })
// console.log(result);


// let products=[
//     {name: "Laptop" , price:40000},
//     {name: "Tablet" , price:10000},
//     {name: "Mouse" , price:400},
//     {name: "Bat" , price:900},
//     {name: "Phone" , price:20000},
// ]
// const result =products.filter((value)=>{
//    return value.price<=1000;
// })

// console.log(result);




// const num=[1,2,3,4,3,5];
// let unique=num.filter((value,index,arr)=>{
//     // console.log(num.indexOf(value),value)
//     return index===num.indexOf(value)
// })
// console.log(unique);


// let str=['hello','hie','hey','kaiseho']

// let change=str.map((value)=>{
//     return value.toUpperCase() ;
// })
// console.log(change);


// const num=[1,2,4,6,8,3];
// let sq= num.map((value)=>{
//     if(value%2==0){
//         return value*value;
//     }
// }).filter((value)=>(
//     value != undefined
// ))
// console.log(sq);


// const num=[1,2,4,6,8,3];
// let sq= num.filter((value)=>{
//     if(value%2==0){
//         return value
//     }
// }).map((value)=> value*value)
// console.log(sq);


// const arr=[100,200,300,400,500];
// let sum=arr.reduce((acc,value)=>{
//    return acc+value;
// },0)
// console.log(sum);


// let arr=["Kyoto", "London", "Cape Town", "Vancouver"];
// let key="Cape Town";
// let isAvailable=false;
// for(let i=0;i<arr.length; i++){
//     if(arr[i]==key){
//         isAvailable=true;
//         break;
//     }  
// }
// if(isAvailable==true){
//     console.log("present");
    
// }
// else{
//     console.log("not present");
    
// }



let topCities = ["Berlin", "Singapore", "New York"];
let bottomCities=["Morraco","Germany","Lahore"]
// let copy = topCities;

// let ndcopy=copy.push("hello");

// console.log(topCities);

// console.log(copy);

// console.log(ndcopy)

// topCities.splice(0,2,"Mumbai","Delhi");

// console.log(topCities.concat(bottomCities));
// let check=topCities+bottomCities;     // YE IMPLICIT TYPE CONVERSION KAR DERA H (STRING M CHANGE KR DERA H )


// console.log(typeof check);

// console.log(topCities.join(bottomCities))



// let collection=[];
// let tea;

// do {
//    tea= prompt(`Enter the tea (click stop to stop) `);
//    if(tea!='stop'){
//    collection.push(tea);
//    }
// } while (tea != 'stop');


// let total=0;
// let i=1;
// do {
//     total+=i;
//     i++;
// } while (i<=3);
// console.log(total);


// let arr=[2,4,6];
// let multipliedArry=[];

// for(let i=0; i<arr.length; i++){
//     // let takeNum=arr[i]*2;
//     // multipliedArry.push(takeNum);
//     // multipliedArry.push(arr[i]*2)

//     multipliedArry.push(arr[i])
// }

// console.log(multipliedArry);


