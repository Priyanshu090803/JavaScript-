const p =  new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Hello from the promise");
    }, 5000);
})

// function promiseFun(){
//     p.then(value=>console.log(value));
//     console.log("hello from the promiseFun")
// }

// console.log("Hello Hellooo")
// promiseFun()


// async function PromseHandler(){
//     console.log("Hello Hello");
//     const val= await p;
//     console.log("Hello JavaScript");
//     console.log(val);
// }

// setTimeout(()=>{
//     console.log("SetTimeOut Hello")
// },1000)
// PromseHandler();

const p1 = new Promise((resolve,reject)=>{
       setTimeout(() => {
        resolve("This is  a 1t promise")
       }, 5000);
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("This is 2nd promise")
    }, 10000);
})
async function PromseHandler(){
    console.log("Hello Hello");
    const val1= await p1;
    console.log("hello hello");
    console.log(val1);

    console.log("Hello JavaScript");
    const val2 = await p2;
    console.log("hello javaScript");
    console.log(val2);
}

PromseHandler().catch((err)=>{
    console.log(err);
})
